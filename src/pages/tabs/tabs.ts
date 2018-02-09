import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Activity } from '../activity/activity';
import { Miracle } from '../miracle/miracle';
import { HomePage } from '../home/home';

@Component({

  selector: 'page-tabs',

  templateUrl: 'tabs.html'

})

export class TabsPage {

  tab1Root = Activity;
  tab2Root = HomePage;
  tab3Root = Miracle;
  myIndex: number;
  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }
}



