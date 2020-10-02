import {BaseModel} from '../BaseModel';
export class Trip extends BaseModel {
    localStart?:string;
    localEnd ?:string;
    scheduledStrartAt ?: Date;
    scheduledEndAt ?: Date;
    startAt ?: Date ;
    endAt ?: Date;
    driverId ?: String;
    staffId ?: string[]
    
}