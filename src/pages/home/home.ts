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

  public hide: boolean = false;

  hideMenu() {
    this.hide = !this.hide;
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

    document.getElementById("hourNextVisit").innerHTML = date.getHours().toFixed() + ":" + this.addLeading(date.getMinutes());
  }

  static getUserName() {
    document.getElementById("userName").innerHTML = "Mary";
  }

  static getMaajarName() {
    document.getElementById("maajarName").innerHTML = "Jarvis"
  }

  ionViewDidLoad() {
    HomePage.getDateNextVisit();
    HomePage.getMaajarName();
    HomePage.getUserName();
  }

}
