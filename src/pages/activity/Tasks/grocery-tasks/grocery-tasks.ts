import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../../../providers/firebase/firebase';
import { FirebaseListObservable } from "angularfire2/database-deprecated";

@IonicPage()
@Component({
  selector: 'page-grocery-tasks',
  templateUrl: 'grocery-tasks.html',
})
export class GroceryTasks {
  groceryItems: FirebaseListObservable<any[]>;
  newItem = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.groceryItems = this.firebaseProvider.getShoppingItems('/activity/groceryItems/');
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem, '/activity/groceryItems/');
  }

  removeItem(id) {
    this.firebaseProvider.removeItem(id, '/activity/groceryItems/');
  }

}
