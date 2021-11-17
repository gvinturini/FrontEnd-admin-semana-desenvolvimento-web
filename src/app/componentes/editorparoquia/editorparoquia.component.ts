import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-angular';
import { Cidade } from 'src/app/model/Cidade';
import { Estado } from 'src/app/model/Estado';
import { Paroquia } from 'src/app/model/Paroquia';
import { CidadeestadoService } from 'src/app/servicos/cidadeestado.service';
import { ParoquiasService } from 'src/app/servicos/paroquias.service';

@Component({
  selector: 'app-editorparoquia',
  templateUrl: './editorparoquia.component.html',
  styleUrls: ['./editorparoquia.component.css']
})
export class EditorparoquiaComponent implements OnInit {

  public Editor;
  public paroquia: Paroquia;

  public listaCidades: Cidade[] = [];
  public listaEstados: Estado[] = [];
  public idEstado = 0;
  public idCidade = 0;
  constructor(private ceservice: CidadeestadoService, private paroquiaService: ParoquiasService,
              private router: Router) { 
    this.Editor = ClassicEditor;
    this.paroquia = new Paroquia();

    this.ceservice.recuperarEstados().subscribe(
      (res: Estado[]) => {this.listaEstados = res},
      (err: any) => {alert("Erro ao recuperar estados")}
    );
  }

  ngOnInit(): void {
  }

  public recuperarCidades() {
    this.ceservice.recuperarCidades(this.idEstado).subscribe(
      (res: Cidade[]) => {this.listaCidades = res;},
      (err: any) => {alert("Erro ao recuperar cidades")}
    );
  }

  public cadastrarParoquia() {
    let cidade: Cidade = new Cidade()
    cidade.id = this.idCidade;
    this.paroquia.cidade = cidade;
    this.paroquiaService.adicionarParoquia(this.paroquia).subscribe(
      (res: Paroquia) => {alert("Paroquia cadastrada com sucesso")},
      (err: any) => {
        alert("Erro ao cadastrar paróquia");
        if (err.status == 403) {
          this.router.navigate(['/']);
        }
      }
    );
  }
}
