import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoesTasksPage } from './shoes-tasks';

@NgModule({
  declarations: [
    ShoesTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(ShoesTasksPage),
  ],
})
export class ShoesTasksPageModule {}
