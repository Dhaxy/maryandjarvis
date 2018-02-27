import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../../../providers/firebase/firebase';
import { FirebaseListObservable } from "angularfire2/database-deprecated";

@IonicPage()
@Component({
  selector: 'page-home-tasks',
  templateUrl: 'home-tasks.html',
})
export class HomeTasks {
  homeItems: FirebaseListObservable<any[]>;
  newItem = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.homeItems = this.firebaseProvider.getShoppingItems('/activity/homeItems/');
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem, '/activity/homeItems/');
  }

  removeItem(id) {
    this.firebaseProvider.removeItem(id, '/activity/homeItems/');
  }
}
