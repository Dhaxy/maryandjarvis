import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecyclingTasksPage } from './recycling-tasks';

@NgModule({
  declarations: [
    RecyclingTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(RecyclingTasksPage),
  ],
})
export class RecyclingTasksPageModule {}
