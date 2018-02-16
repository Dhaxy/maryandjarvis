import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Newprofil } from '../pages/newprofil/newprofil';
import { Activity } from '../pages/activity/activity';
import { Miracle } from '../pages/miracle/miracle';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@
NgModule({
  declarations: [
    MyApp,
    Welcome,
    Login,
    Register,
    HomePage,
    TabsPage,
    Newprofil,
    Miracle,
    Activity
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Welcome,
    Login,
    Register,
    HomePage,
    TabsPage,
    Newprofil,
    Miracle,
    Activity
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
