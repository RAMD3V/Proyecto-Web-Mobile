import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContenidoappPageRoutingModule } from './contenidoapp-routing.module';

import { ContenidoappPage } from './contenidoapp.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContenidoappPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [ContenidoappPage]
})
export class ContenidoappPageModule {}
