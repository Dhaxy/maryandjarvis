import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoesTasks } from './shoes-tasks';

@NgModule({
  declarations: [
    ShoesTasks,
  ],
  imports: [
    IonicPageModule.forChild(ShoesTasks),
  ],
})
export class ShoesTasksModule {}
