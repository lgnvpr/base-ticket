import {BaseModel} from '../BaseModel';
import { TypeCar } from './TypeCar';
export class Car extends BaseModel {
    name ?: string;
    typeCarId ?: string;
    TypeCar ?: TypeCar;
    licensePlates ?: string;
    entryAt ?: Date;
    origin ?: string;
    statusCar ?: string;
}