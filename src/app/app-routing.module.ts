import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorparoquiaComponent } from './componentes/editorparoquia/editorparoquia.component';
import { LoginComponent } from './componentes/login/login.component';
import { ParoquiasComponent } from './componentes/paroquias/paroquias.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'paroquias', component: ParoquiasComponent},
  {path: 'editorparoquia', component: EditorparoquiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
