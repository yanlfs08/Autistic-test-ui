import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendResultPage } from './send-result.page';

const routes: Routes = [
  {
    path: '',
    component: SendResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendResultPageRoutingModule {}
