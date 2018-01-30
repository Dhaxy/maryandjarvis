import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Login } from '../login/login';
import { Newprofil } from '../newprofil/newprofil';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

  login() {
    this.navCtrl.push(Login);
  }

  signup() {
    this.navCtrl.setRoot(Newprofil);
  }

}
