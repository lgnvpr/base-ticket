import {BaseModel} from '../BaseModel';
import { Car } from './Car';
import { Staff } from './Staff';
export class Route extends BaseModel {
    localStart?:string;
    localEnd ?:string;
    startAt ?: Date ;
    sumTimeRun ?: number;   
}