import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, 
    public bluetoothle: BluetoothLE, public plt: Platform) {
        console.log("in bluetooth pages");
      this.plt.ready().then((readySource) => {
        
        console.log('Platform ready from',readySource);

        this.bluetoothle.initialize().toPromise().then(ble => {
          console.log('ble',ble.status)
        });
      });
  }

}
