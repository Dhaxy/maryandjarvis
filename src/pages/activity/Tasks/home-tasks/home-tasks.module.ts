import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTasks } from './home-tasks';

@NgModule({
  declarations: [
    HomeTasks,
  ],
  imports: [
    IonicPageModule.forChild(HomeTasks),
  ],
})
export class HomeTasksModule {}
