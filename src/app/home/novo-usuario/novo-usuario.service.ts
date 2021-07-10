import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) { }

  cadastroNovousuario(novoUsario: NovoUsuario): Observable<NovoUsuario> {
    return this.http.post<NovoUsuario>('http://localhost:3000/usuer/signup', novoUsario)
  }
}
