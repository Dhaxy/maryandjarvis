import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Miracle } from './miracle';

@NgModule({
  declarations: [
    Miracle,
  ],
  imports: [
    IonicPageModule.forChild(Miracle),
  ],
})
export class MiracleModule {}
