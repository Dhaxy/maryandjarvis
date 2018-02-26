import {Component} from '@angular/core';
import {NavController, App} from 'ionic-angular';
import {FirebaseProvider} from "../../providers/firebase/firebase";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, public app: App, public firebase: FirebaseProvider) {

  }

  static addZero(n) {
    return (n == 0) ? (n + "0") : n;
  }


  static addLeading(n) {
    return (n < 10) ? ("0" + n) : n;
  }

  static getDateNextVisit() {
    let tmp = new Date();
    let date = new Date(tmp.getTime());
    let monthNumber = this.addLeading(date.getMonth() + 1);

    document.getElementById("dateNextVisit").innerHTML =
      date.getDate().toFixed() + "/" +
      monthNumber + "/" +
      date.getFullYear().toFixed();

    document.getElementById("hourNextVisit").innerHTML = date.getHours().toFixed() + ":" + this.addZero(date.getMinutes());
  }

  static getMaajarName() {
    document.getElementById("maajarName").innerHTML = "Jarvis"
  }

  ionViewDidLoad() {
    HomePage.getDateNextVisit();
    HomePage.getMaajarName();
  }

}
