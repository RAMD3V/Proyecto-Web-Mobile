import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[

      {
        path:"contenido",
        loadChildren:()=> import("../contenido/contenido.module").then(m => m.ContenidoPageModule)
      },
      {
        path:"perfil",
        loadChildren:()=> import("../perfil/perfil.module").then(m => m.PerfilPageModule)
      },
      {
        path:"contenidoApp",
        loadChildren:()=> import("../contenidoapp/contenidoapp.module").then(m => m.ContenidoappPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
