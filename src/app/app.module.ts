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
import { DryTasks } from '../pages/activity/Tasks/dry-tasks/dry-tasks';
import { GroceryTasks } from '../pages/activity/Tasks/grocery-tasks/grocery-tasks';
import { HomeTasks } from '../pages/activity/Tasks/home-tasks/home-tasks';
import { LaundryTasks } from '../pages/activity/Tasks/laundry-tasks/laundry-tasks';
import { MailTasks } from '../pages/activity/Tasks/mail-tasks/mail-tasks';
import { RecyclingTasks } from '../pages/activity/Tasks/recycling-tasks/recycling-tasks';
import { ShoesTasks } from '../pages/activity/Tasks/shoes-tasks/shoes-tasks';
import { Miracle } from '../pages/miracle/miracle';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireDatabaseModule } from "angularfire2/database-deprecated";
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAnS2ElF5x2Fo-Z_KIe0avWhktzSR-ElHY",
  authDomain: "maryandjarvis-b2612.firebaseapp.com",
  databaseURL: "https://maryandjarvis-b2612.firebaseio.com",
  projectId: "maryandjarvis-b2612",
  storageBucket: "maryandjarvis-b2612.appspot.com",
  messagingSenderId: "726450579712"
};


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
    Activity,
    DryTasks,
    GroceryTasks,
    HomeTasks,
    LaundryTasks,
    MailTasks,
    RecyclingTasks,
    ShoesTasks
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
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
    Activity,
    DryTasks,
    GroceryTasks,
    HomeTasks,
    LaundryTasks,
    MailTasks,
    RecyclingTasks,
    ShoesTasks
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
