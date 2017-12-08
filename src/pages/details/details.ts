import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Reminder } from '../../models/reminder';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  reminder: Reminder

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    console.log(navParams.data)
    this.reminder = <Reminder>navParams.data;
    console.log(this.reminder);
  }

  

  
}
