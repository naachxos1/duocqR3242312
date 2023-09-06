import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatCorreoPageRoutingModule } from './chat-correo-routing.module';

import { ChatCorreoPage } from './chat-correo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatCorreoPageRoutingModule
  ],
  declarations: [ChatCorreoPage]
})
export class ChatCorreoPageModule {}
