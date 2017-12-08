import { Type } from "./type";
import { Status } from "./status";
import { Time } from "@angular/common/src/i18n/locale_data_api";

export class Reminder{
    id: number;
    title: string;
    description:string;
    type: Type ;
    status: Status;
    date: Date;
    image: string;
}