import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Newprofil } from './newprofil';

@NgModule({
  declarations: [
    Newprofil,
  ],
  imports: [
    IonicPageModule.forChild(Newprofil),
  ],
  exports: [
    Newprofil
  ]
})
export class NewprofilModule {}
