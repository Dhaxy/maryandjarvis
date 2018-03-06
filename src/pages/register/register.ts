import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Welcome } from '../welcome/welcome';
import { Newprofil } from '../newprofil/newprofil';
import { User } from "../user";
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async next(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      if (result) {
        this.navCtrl.setRoot(Newprofil);
      }
    } catch (e) {
      console.error(e);
    }
  }

  back() {
    this.navCtrl.push(Welcome, {}, { animate: false });
  }

}
