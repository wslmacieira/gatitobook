import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NovoUsuario } from './novo-usuario';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) { }

  cadastroNovousuario(novoUsario: NovoUsuario): Observable<NovoUsuario> {
    return this.http.post<NovoUsuario>(`${API}/user/signup`, novoUsario)
  }

  verificaUsuarioExistente(nomeUsario: string) {
    return this.http.get(`${API}/user/exists/${nomeUsario}`)
  }
}
