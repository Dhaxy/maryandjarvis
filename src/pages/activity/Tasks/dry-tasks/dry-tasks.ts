import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../../../providers/firebase/firebase';
import { FirebaseListObservable } from "angularfire2/database-deprecated";

@IonicPage()
@Component({
  selector: 'page-dry-tasks',
  templateUrl: 'dry-tasks.html',
})
export class DryTasks {
  dryItems: FirebaseListObservable<any[]>;
  newItem = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.dryItems = this.firebaseProvider.getShoppingItems('/activity/dryItems/');
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem, '/activity/dryItems/');
  }

  removeItem(id) {
    this.firebaseProvider.removeItem(id, '/activity/dryItems/');
  }

}
