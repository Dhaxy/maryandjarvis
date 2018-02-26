import {Component} from '@angular/core';
import {NavController, App} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App) {

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

    document.getElementById("hourNextVisit").innerHTML = date.getHours().toFixed() + ":" + date.getMinutes().toFixed();
  }

  static getMajaarName() {
    document.getElementById("majaarName").innerHTML = "Jarvis"
  }

  ionViewDidLoad() {
    HomePage.getDateNextVisit();
    HomePage.getMajaarName();
  }

}
