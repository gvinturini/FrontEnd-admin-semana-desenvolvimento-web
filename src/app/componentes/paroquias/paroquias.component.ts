import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paroquias',
  templateUrl: './paroquias.component.html',
  styleUrls: ['./paroquias.component.css']
})
export class ParoquiasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public adicionarParoquia() {
    this.router.navigate(['/editorparoquia']); 
  }

}
