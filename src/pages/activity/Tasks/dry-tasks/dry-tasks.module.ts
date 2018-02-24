import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DryTasks } from './dry-tasks';

@NgModule({
  declarations: [
    DryTasks,
  ],
  imports: [
    IonicPageModule.forChild(DryTasks),
  ],
})
export class DryTasksModule {}
