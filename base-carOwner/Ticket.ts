import {BaseModel} from '../BaseModel';
export class Ticket extends BaseModel {
    carId  ?:string;
    customerId ?:string;
    staffId ?:string;
    price ?: number;
    tripId ?: string;
    localStart ?: string;
    localEnd ?: string;
    statusTicket  ?:string;
    statusCheckTicket ?: string;

}