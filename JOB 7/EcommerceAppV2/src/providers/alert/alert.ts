// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// /*
//   Generated class for the AlertProvider provider.

//   See https://angular.io/guide/dependency-injection for more info on providers
//   and Angular DI.
// */
// @Injectable()
// export class AlertProvider {

//   constructor(public http: HttpClient) {
//     console.log('Hello AlertProvider Provider');
//   }

// }
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class AlertProvider {

 constructor(private toastController: ToastController)
 { }

 async showToast(message: any) {
  const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
 });
 toast.present();
 }
}