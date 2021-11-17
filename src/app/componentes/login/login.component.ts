
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/model/Token';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/servicos/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  constructor(private userService: UsuarioService,
              private router: Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  public efetivarLogin() {
    this.userService.efetivarLogin(this.usuario).subscribe(
      (res: Token) => {
        localStorage.setItem("VIRTUSToken", res.strToken);
        this.router.navigate(['/paroquias']);
      },
      (err: any) => {alert("Dados inválidos de login");}
    );
  }
}
