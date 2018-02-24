import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MailTasksPage } from './mail-tasks';

@NgModule({
  declarations: [
    MailTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(MailTasksPage),
  ],
})
export class MailTasksPageModule {}
