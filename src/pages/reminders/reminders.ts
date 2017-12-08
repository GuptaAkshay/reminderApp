import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { CreateReminderPage } from '../create-reminder/create-reminder';
import { Reminder } from '../../models/reminder';
import { ReminderService } from '../../services/reminders.service';

@Component({
  selector: 'page-reminders',
  templateUrl: 'reminders.html'
})
export class RemindersPage {

  remindersList : Reminder[];

  constructor(public navCtrl: NavController, private _service: ReminderService) {
    this.remindersList = [];
    this.getReminders();
  }

  getReminders(){
    this._service.getReminders().subscribe(
      (res)=>{
        this.remindersList = res.json().data;
      },
      (err)=>{
        console.log(err);
      }
    );

  }

  goToDetails(reminder:Reminder){
    //if (!params) params = {};
    console.log(reminder);
    this.navCtrl.push(DetailsPage, reminder);
  }

  goToCreateReminder(params){
    if (!params) params = {};
    this.navCtrl.push(CreateReminderPage);
  }

}
