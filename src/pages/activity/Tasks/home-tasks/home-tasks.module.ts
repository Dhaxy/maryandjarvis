import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTasksPage } from './home-tasks';

@NgModule({
  declarations: [
    HomeTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeTasksPage),
  ],
})
export class HomeTasksPageModule {}
