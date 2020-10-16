import {BaseModel} from '../BaseModel';
import { Staff } from './Staff';
import { Route } from './Route';
import { Trip } from './Trip';
import { ChairCar } from './ChairCar';
import { Car } from './Car';
export class Ticket extends BaseModel {
    ChairCarId  ?:string;
    ChairCar ?: ChairCar;
    CarId  ?: string;
    Car ?: Car;
    customerId ?:string;
    customer ?: Staff;
    staffId ?:string;
    staff ?: string;
    tripId ?: string;
    trip ?: Trip;
    statusTicket  ?:string;
    statusCheckTicket ?: string;
    itemInclude ?: string[];

}