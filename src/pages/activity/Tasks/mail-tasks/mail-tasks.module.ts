import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MailTasks } from './mail-tasks';

@NgModule({
  declarations: [
    MailTasks,
  ],
  imports: [
    IonicPageModule.forChild(MailTasks),
  ],
})
export class MailTasksModule {}
