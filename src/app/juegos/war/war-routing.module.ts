import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarPage } from './war.page';

const routes: Routes = [
  {
    path: '',
    component: WarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarPageRoutingModule {}
