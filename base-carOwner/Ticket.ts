import {BaseModel} from '../BaseModel';
import { Staff } from './Staff';
import { Trip } from './Trip';
export class Ticket extends BaseModel {
    carId  ?:string;
    customerId ?:string;
    customer ?: Staff;
    staffId ?:string;
    staff ?: string;
    price ?: number;
    tripId ?: string;
    trip ?: Trip;
    localStart ?: string;
    localEnd ?: string;
    statusTicket  ?:string;
    statusCheckTicket ?: string;
    itemInclude ?: string[];

}