import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaundryTasksPage } from './laundry-tasks';

@NgModule({
  declarations: [
    LaundryTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(LaundryTasksPage),
  ],
})
export class LaundryTasksPageModule {}
