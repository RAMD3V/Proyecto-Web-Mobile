import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeaPageRoutingModule } from './sea-routing.module';

import { SeaPage } from './sea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeaPageRoutingModule
  ],
  declarations: [SeaPage]
})
export class SeaPageModule {}
