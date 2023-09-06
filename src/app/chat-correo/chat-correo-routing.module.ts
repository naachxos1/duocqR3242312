import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatCorreoPage } from './chat-correo.page';

const routes: Routes = [
  {
    path: '',
    component: ChatCorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatCorreoPageRoutingModule {}
