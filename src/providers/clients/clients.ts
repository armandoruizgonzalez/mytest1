import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {global} from '../../app/configGlobal';
import { Observable, Subject } from 'rxjs';
import {map} from 'rxjs/operators';

/*
  Generated class for the ClientsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientsProvider {

 constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  clients() {

    let headers = new HttpHeaders({
     'accept': 'application/vnd.bancolombia.v1+json',
      'authorization': 'Bearer ' + global.token
    });

    return this.http.get(global.url, {headers: headers}).pipe(map(res => res)); 
  }

}
