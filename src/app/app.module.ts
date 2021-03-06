import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { RemindersPage } from '../pages/reminders/reminders';
import { DetailsPage } from '../pages/details/details';
import { CreateReminderPage } from '../pages/create-reminder/create-reminder';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReminderService } from '../services/reminders.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    RemindersPage,
    DetailsPage,
    CreateReminderPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RemindersPage,
    DetailsPage,
    CreateReminderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReminderService
  ]
})
export class AppModule {}