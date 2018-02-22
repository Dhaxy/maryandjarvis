import {Component} from '@angular/core';
import {NavController, App} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App) {

  }

  static getDateNextVisit() {
    let tmp = new Date();
    let date = new Date(tmp.getTime());

    document.getElementById("dateNextVisit").innerHTML =
      date.getDate().toFixed() + "/" +
      date.getMonth() + "/" +
      date.getFullYear();

    document.getElementById("hourNextVisit").innerHTML = date.getHours() + ":" + date.getMinutes();
  }

  static getMajaarName() {
    document.getElementById("majaarName").innerHTML = "Jarvis"
  }

  ionViewDidLoad() {
    HomePage.getDateNextVisit();
    HomePage.getMajaarName();
  }

}
