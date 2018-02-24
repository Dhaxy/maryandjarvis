import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DryTasks } from './Tasks/dry-tasks/dry-tasks';

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
}
