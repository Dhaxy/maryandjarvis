import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroceryTasksPage } from './grocery-tasks';

@NgModule({
  declarations: [
    GroceryTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(GroceryTasksPage),
  ],
})
export class GroceryTasksPageModule {}
