import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FornaPage } from './forna.page';

const routes: Routes = [
  {
    path: '',
    component: FornaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FornaPageRoutingModule {}
