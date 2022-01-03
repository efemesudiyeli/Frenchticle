import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KelimelerPage } from './kelimeler.page';

const routes: Routes = [
  {
    path: '',
    component: KelimelerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KelimelerPageRoutingModule {}
