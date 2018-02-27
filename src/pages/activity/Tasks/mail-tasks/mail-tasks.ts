import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../../../providers/firebase/firebase';
import { FirebaseListObservable } from "angularfire2/database-deprecated";

@IonicPage()
@Component({
  selector: 'page-mail-tasks',
  templateUrl: 'mail-tasks.html',
})
export class MailTasks {
  mailItems: FirebaseListObservable<any[]>;
  newItem = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.mailItems = this.firebaseProvider.getShoppingItems('/activity/mailItems/');
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem, '/activity/mailItems/');
  }

  removeItem(id) {
    this.firebaseProvider.removeItem(id, '/activity/mailItems/');
  }
}
