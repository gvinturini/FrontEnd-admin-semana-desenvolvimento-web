import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paroquia } from '../model/Paroquia';

@Injectable({
  providedIn: 'root'
})
export class ParoquiasService {

  constructor(private http: HttpClient, private router: Router) { }

  public adicionarParoquia(paroquia: Paroquia): Observable<Paroquia> {
    let token = localStorage.getItem("VIRTUSToken");
    if (!token) {
      this.router.navigate(['/']);
    }
    let header = {
      'Authorization': token,
    }
    return this.http.post<Paroquia>(environment.apiUrl + "/paroquias", paroquia, {headers: header });
  }
}
