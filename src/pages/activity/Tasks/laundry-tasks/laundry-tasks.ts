import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../../../providers/firebase/firebase';
import { FirebaseListObservable } from "angularfire2/database-deprecated";

@IonicPage()
@Component({
  selector: 'page-laundry-tasks',
  templateUrl: 'laundry-tasks.html',
})
export class LaundryTasks {
  laundryItems: FirebaseListObservable<any[]>;
  newItem = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.laundryItems = this.firebaseProvider.getShoppingItems('/activity/laundryItems/');
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem, '/activity/laundryItems/');
  }

  removeItem(id) {
    this.firebaseProvider.removeItem(id, '/activity/laundryItems/');
  }
}
