import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroceryTasks } from './grocery-tasks';

@NgModule({
  declarations: [
    GroceryTasks,
  ],
  imports: [
    IonicPageModule.forChild(GroceryTasks),
  ],
})
export class GroceryTasksModule {}
