import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SugerenciasComponent } from './componentes/sugerencias/sugerencias.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ListasugerenciasComponent } from './componentes/listasugerencias/listasugerencias.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SugerenciasComponent,
    PerfilComponent,
    ListasugerenciasComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
