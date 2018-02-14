import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App) {

  }

  public hide: boolean = false;

  hideCard() {
    this.hide = !this.hide;
  }
}
