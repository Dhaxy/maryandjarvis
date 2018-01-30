import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-newprofil',
  templateUrl: 'newprofil.html',
})
export class Newprofil {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Newprofil');
  }

  skip() {
    this.navCtrl.push('MenuPage');
  }
}
