import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { CreateReminderPage } from '../create-reminder/create-reminder';

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
  goToCreateReminder(params){
    if (!params) params = {};
    this.navCtrl.push(CreateReminderPage);
  }
}
