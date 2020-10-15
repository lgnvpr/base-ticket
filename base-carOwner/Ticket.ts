import {BaseModel} from '../BaseModel';
import { Staff } from './Staff';
import { Route } from './Route';
import { Trip } from './Trip';
export class Ticket extends BaseModel {
    carId  ?:string;
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