import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  

  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'contenido',
    loadChildren: () => import('./contenido/contenido.module').then( m => m.ContenidoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'contenidoapp',
    loadChildren: () => import('./contenidoapp/contenidoapp.module').then( m => m.ContenidoappPageModule)
  },
  {
    path: 'sugerencias',
    loadChildren: () => import('./sugerencias/sugerencias.module').then( m => m.SugerenciasPageModule)
  },
  {
    path: 'apex',
    loadChildren: () => import('./juegos/apex/apex.module').then( m => m.ApexPageModule)
  },
  {
    path: 'csgo',
    loadChildren: () => import('./juegos/csgo/csgo.module').then( m => m.CsgoPageModule)
  },
  {
    path: 'mine',
    loadChildren: () => import('./juegos/mine/mine.module').then( m => m.MinePageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./juegos/new/new.module').then( m => m.NewPageModule)
  },
  {
    path: 'terra',
    loadChildren: () => import('./juegos/terra/terra.module').then( m => m.TerraPageModule)
  },

  {
    path: 'forna',
    loadChildren: () => import('./juegos/forna/forna.module').then( m => m.FornaPageModule)
  },
  {
    path: 'sea',
    loadChildren: () => import('./juegos/sea/sea.module').then( m => m.SeaPageModule)
  },
  {
    path: 'war',
    loadChildren: () => import('./juegos/war/war.module').then( m => m.WarPageModule)
  },
  {
    path: 'gta',
    loadChildren: () => import('./juegos/gta/gta.module').then( m => m.GtaPageModule)
  },
  {
    path: 'leage',
    loadChildren: () => import('./juegos/leage/leage.module').then( m => m.LeagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
