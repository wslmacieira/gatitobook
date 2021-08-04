import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Comentarios } from './comentarios';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  comentarios$!: Observable<Comentarios>;
  comentarioForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  gravar() {}

}
