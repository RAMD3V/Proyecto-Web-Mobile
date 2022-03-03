import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsgoPageRoutingModule } from './csgo-routing.module';

import { CsgoPage } from './csgo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsgoPageRoutingModule
  ],
  declarations: [CsgoPage]
})
export class CsgoPageModule {}
