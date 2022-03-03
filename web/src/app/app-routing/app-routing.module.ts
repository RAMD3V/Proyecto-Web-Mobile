import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../componentes/home/home.component';
import { HeaderComponent } from '../componentes/header/header.component';
import { SugerenciasComponent } from '../componentes/sugerencias/sugerencias.component';
import { PerfilComponent } from '../componentes/perfil/perfil.component';
import { ListasugerenciasComponent } from '../componentes/listasugerencias/listasugerencias.component';


const routes : Routes=[
{
  path:`home`,
  component: HomeComponent
},
{
  path:`header`,
  component: HeaderComponent
},
{
  path:'sugerencias',
  component: SugerenciasComponent
},
{
  path:'perfil',
  component:PerfilComponent
},
{
  path:'sugerenciaslista',
  component:ListasugerenciasComponent
}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports :[RouterModule]
})
export class AppRoutingModule { }
