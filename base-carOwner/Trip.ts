import {BaseModel} from '../BaseModel';
import { Car } from './Car';
import { Staff } from './Staff';
export class Trip extends BaseModel {
    localStart?:string;
    localEnd ?:string;
    scheduledStrartAt ?: Date;
    scheduledEndAt ?: Date;
    startAt ?: Date ;
    endAt ?: Date;
    driverId ?: String;
    driver ?: Staff;
    staffId ?: string[];
    staff ?: Staff;
    carId ?: string;
    car ?: Car;
}