import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
// import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';
import { BLE } from '@ionic-native/ble';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  // constructor(public navCtrl: NavController, 
  //   public bluetoothle: BluetoothLE, public plt: Platform) {
  //       console.log("in bluetooth pages");
  //     this.plt.ready().then((readySource) => {
        
  //       console.log('Platform ready from',readySource);

  //       this.bluetoothle.initialize().toPromise().then(ble => {
  //         console.log('ble',ble.status)
  //       });
  //     });
  // }
  constructor(public navCtrl: NavController, public ble:BLE, public plt: Platform) {
    console.log("in bluetooth pages");
        this.plt.ready().then((readySource) => {
          
          console.log('Platform ready from',readySource);

          this.ble.scan([],5).subscribe(device => {
            console.log(JSON.stringify(device));
            
          });
        //     [], 5, function(plt) {
        //     console.log(JSON.stringify(plt));
        // }, failure);
        });
  }


}
