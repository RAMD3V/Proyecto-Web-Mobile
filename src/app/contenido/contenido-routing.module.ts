import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContenidoPage } from './contenido.page';

const routes: Routes = [
  {
    path: '',
    component: ContenidoPage,
    children: [
      {
        path: 'apex',
        loadChildren: () => import('../juegos/apex/apex.module').then(m => m.ApexPageModule)
      },
      {
        path: 'csgo',
        loadChildren: () => import('../juegos/csgo/csgo.module').then(m => m.CsgoPageModule)
      },
      {
        path: 'mine',
        loadChildren: () => import('../juegos/mine/mine.module').then( m => m.MinePageModule)
      },
      {
        path: 'new',
        loadChildren: () => import('../juegos/new/new.module').then( m => m.NewPageModule)
      },
      {
        path: 'terra',
        loadChildren: () => import('../juegos/terra/terra.module').then( m => m.TerraPageModule)
      },
      {
        path: 'forna',
        loadChildren: () => import('../juegos/forna/forna.module').then( m => m.FornaPageModule)
      },
      {
        path: 'sea',
        loadChildren: () => import('../juegos/sea/sea.module').then( m => m.SeaPageModule)
      },
      {
        path: 'war',
        loadChildren: () => import('../juegos/war/war.module').then( m => m.WarPageModule)
      },
      {
        path: 'gta',
        loadChildren: () => import('../juegos/gta/gta.module').then( m => m.GtaPageModule)
      },
      {
        path: 'leage',
        loadChildren: () => import('../juegos/leage/leage.module').then( m => m.LeagePageModule)
      },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContenidoPageRoutingModule {}
