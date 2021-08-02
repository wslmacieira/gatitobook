import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AnimaisService } from '../animais.service';
import { Animal } from '../animal';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css'],
})
export class DetalheAnimalComponent implements OnInit {
  animalID!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animaisservice: AnimaisService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.animalID = this.route.snapshot.params.animalId;
    console.log(this.animalID);
    this.animal$ = this.animaisservice.buscaPorID(this.animalID);

  }
}
