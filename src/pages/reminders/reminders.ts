import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-reminders',
  templateUrl: 'reminders.html'
})
export class RemindersPage {

  constructor(public navCtrl: NavController) {
  }
  goToDetails(params){
    if (!params) params = {};
    this.navCtrl.push(DetailsPage);
  }
}
