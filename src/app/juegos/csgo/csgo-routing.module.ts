import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsgoPage } from './csgo.page';

const routes: Routes = [
  {
    path: '',
    component: CsgoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsgoPageRoutingModule {}
