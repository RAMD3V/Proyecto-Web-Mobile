import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GtaPage } from './gta.page';

const routes: Routes = [
  {
    path: '',
    component: GtaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GtaPageRoutingModule {}
