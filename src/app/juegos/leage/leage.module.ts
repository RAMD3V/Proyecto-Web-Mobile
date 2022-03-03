import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeagePageRoutingModule } from './leage-routing.module';

import { LeagePage } from './leage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeagePageRoutingModule
  ],
  declarations: [LeagePage]
})
export class LeagePageModule {}
