import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KelimelerPageRoutingModule } from './kelimeler-routing.module';

import { KelimelerPage } from './kelimeler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    KelimelerPageRoutingModule
  ],
  declarations: [KelimelerPage]
})
export class KelimelerPageModule {}
