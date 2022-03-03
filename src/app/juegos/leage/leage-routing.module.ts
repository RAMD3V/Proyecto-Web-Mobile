import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeagePage } from './leage.page';

const routes: Routes = [
  {
    path: '',
    component: LeagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeagePageRoutingModule {}
