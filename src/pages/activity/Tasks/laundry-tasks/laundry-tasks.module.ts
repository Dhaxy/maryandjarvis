import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaundryTasks } from './laundry-tasks';

@NgModule({
  declarations: [
    LaundryTasks,
  ],
  imports: [
    IonicPageModule.forChild(LaundryTasks),
  ],
})
export class LaundryTasksModule {}
