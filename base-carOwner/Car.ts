import {BaseModel} from '../BaseModel';
export class Car extends BaseModel {
    name : string;
    typeCarId : string;
    licensePlates : string;
    entryAt ?: Date;
    origin : string;
    statusCar ?: string;
}