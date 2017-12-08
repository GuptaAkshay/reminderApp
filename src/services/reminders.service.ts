import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReminderService {


    constructor( private _http: Http){}

    getReminders(){
        return this._http.get("assets/json/data.json");        
    }
}