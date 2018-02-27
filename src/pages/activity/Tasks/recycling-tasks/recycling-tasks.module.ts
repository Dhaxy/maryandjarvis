import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecyclingTasks } from './recycling-tasks';

@NgModule({
  declarations: [
    RecyclingTasks,
  ],
  imports: [
    IonicPageModule.forChild(RecyclingTasks),
  ],
})
export class RecyclingTasksModule {}
