import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../../../providers/firebase/firebase';
import { FirebaseListObservable } from "angularfire2/database-deprecated";

@IonicPage()
@Component({
  selector: 'page-shoes-tasks',
  templateUrl: 'shoes-tasks.html',
})
export class ShoesTasks {
  shoesItems: FirebaseListObservable<any[]>;
  newItem = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.shoesItems = this.firebaseProvider.getShoppingItems('/activity/shoesItems/');
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem, '/activity/shoesItems/');
  }

  removeItem(id) {
    this.firebaseProvider.removeItem(id, '/activity/shoesItems/');
  }
}
