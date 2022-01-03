import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AddwordPageRoutingModule } from './addword-routing.module';

import { AddwordPage } from './addword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddwordPageRoutingModule
  ],
  declarations: [AddwordPage]
})
export class AddwordPageModule {}
