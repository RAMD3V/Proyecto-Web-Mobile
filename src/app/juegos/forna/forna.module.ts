import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FornaPageRoutingModule } from './forna-routing.module';

import { FornaPage } from './forna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FornaPageRoutingModule
  ],
  declarations: [FornaPage]
})
export class FornaPageModule {}
