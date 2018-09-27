import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClientePage } from '../cliente/cliente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToClient() {
    
    this.navCtrl.push(ClientePage);
  }

}
