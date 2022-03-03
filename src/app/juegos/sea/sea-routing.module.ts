import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeaPage } from './sea.page';

const routes: Routes = [
  {
    path: '',
    component: SeaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeaPageRoutingModule {}
