import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddwordPage } from './addword.page';

const routes: Routes = [
  {
    path: '',
    component: AddwordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddwordPageRoutingModule {}
