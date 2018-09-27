import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientsProvider } from '../../providers/clients/clients';


/**
 * Generated class for the ClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
  providers: [ClientsProvider]
})
export class ClientePage {
 public users;
 public titulo;


  constructor(public navCtrl: NavController, public navParams: NavParams, private clientsProvider: ClientsProvider) {
   this.getClient();
    this.titulo = "Clientes";
  }

  getClient() {
    this.clientsProvider.clients().subscribe(

      response => {
        console.log("Success: ", response);
       // this.users = response.data[0];
       // console.log("SuccessDatos::", this.users.customer_state);
      },
      error => {
        console.log("error::", error);
      }
    );

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientePage');
  }

  goBack() {
    this.navCtrl.pop();
  }

}
