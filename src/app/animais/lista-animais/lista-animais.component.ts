import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UsuarioService } from '../../../app/autenticacao/usuario/usuario.service';
import { AnimaisService } from '../animais.service';
import { Animais } from '../animal';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  animais!: Animais;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.animais = this.route.snapshot.data['animais'];
    })
  }
}
