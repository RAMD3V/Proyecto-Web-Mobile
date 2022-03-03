import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GtaPageRoutingModule } from './gta-routing.module';

import { GtaPage } from './gta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GtaPageRoutingModule
  ],
  declarations: [GtaPage]
})
export class GtaPageModule {}
