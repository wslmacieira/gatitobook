import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AnimaisService } from '../animais.service';
import { Animal } from '../animal';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css'],
})
export class DetalheAnimalComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animaisservice: AnimaisService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalId = this.route.snapshot.params.animalId;
    this.animal$ = this.animaisservice.buscaPorID(this.animalId);
  }

  curtir() {
    this.animaisservice.curtir(this.animalId).subscribe((curtida) => {
      if(curtida) {
        this.animal$ = this.animaisservice.buscaPorID(this.animalId);
      }
    })
  }

  excluir() {
    this.animaisservice.excluirAnimal(this.animalId).subscribe(
      () => {
        this.router.navigate(['animais']);
      },
      (error) => console.log(error)
    );
  }
}
