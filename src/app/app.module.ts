import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditorparoquiaComponent } from './componentes/editorparoquia/editorparoquia.component';
import { ParoquiasComponent } from './componentes/paroquias/paroquias.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http' 
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EditorparoquiaComponent,
    ParoquiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
