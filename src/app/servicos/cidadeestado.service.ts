import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cidade } from '../model/Cidade';
import { Estado } from '../model/Estado';

@Injectable({
  providedIn: 'root'
})
export class CidadeestadoService {

  constructor(private http: HttpClient) { }

  public recuperarEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>(environment.apiUrl+"/estados/");
  }

  public recuperarCidades(idEstado: number): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(environment.apiUrl+"/cidades?estado="+idEstado);
  }
}
