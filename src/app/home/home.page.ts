import { Component, inject } from '@angular/core';
import { AlertController, NavController, RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';
import { MenuController } from '@ionic/angular';

import { DataService, Message } from '../services/data.service';
import { FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);
  constructor(public fb : FormBuilder, public alertController: AlertController, public navCtrl:NavController, private menuCtrl: MenuController) {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

 async salir(){
    localStorage.removeItem('ingresado')

  };

    openSecondMenu() {
      // Open the menu by menu-id
      this.menuCtrl.enable(true, 'second-menu');
      this.menuCtrl.open('second-menu');
    }

    openEndMenu() {
      // Open the menu by side
      this.menuCtrl.open('end');
    }
  }


