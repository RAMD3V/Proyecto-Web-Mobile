import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarPageRoutingModule } from './war-routing.module';

import { WarPage } from './war.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarPageRoutingModule
  ],
  declarations: [WarPage]
})
export class WarPageModule {}
