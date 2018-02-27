import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../../../providers/firebase/firebase';
import { FirebaseListObservable } from "angularfire2/database-deprecated";

@IonicPage()
@Component({
  selector: 'page-recycling-tasks',
  templateUrl: 'recycling-tasks.html',
})
export class RecyclingTasks {
  recyclingItems: FirebaseListObservable<any[]>;
  newItem = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.recyclingItems = this.firebaseProvider.getShoppingItems('/activity/recyclingItems/');
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem, '/activity/recyclingItems/');
  }

  removeItem(id) {
    this.firebaseProvider.removeItem(id, '/activity/recyclingItems/');
  }
}
