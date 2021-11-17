import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../model/Token';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public efetivarLogin(usuario: Usuario): Observable<Token> {
    return this.http.post<Token>(environment.apiUrl+"/login/", usuario);
  }
}
