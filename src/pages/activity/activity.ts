import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DryTasks } from './Tasks/dry-tasks/dry-tasks';
import { GroceryTasks } from './Tasks/grocery-tasks/grocery-tasks';
import { HomeTasks } from './Tasks/home-tasks/home-tasks';
import { LaundryTasks } from './Tasks/laundry-tasks/laundry-tasks';
import { MailTasks } from './Tasks/mail-tasks/mail-tasks';
import { RecyclingTasks } from './Tasks/recycling-tasks/recycling-tasks';
import { ShoesTasks } from './Tasks/shoes-tasks/shoes-tasks';

@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class Activity {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  dry() {
    this.navCtrl.push(DryTasks);
  }

  grocery() {
    this.navCtrl.push(GroceryTasks);
  }

  home() {
    this.navCtrl.push(HomeTasks);
  }

  laundry() {
    this.navCtrl.push(LaundryTasks);
  }

  mail() {
    this.navCtrl.push(MailTasks);
  }

  recycling() {
    this.navCtrl.push(RecyclingTasks);
  }

  shoes() {
    this.navCtrl.push(ShoesTasks);
  }
}
