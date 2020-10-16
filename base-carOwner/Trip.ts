import { BaseModel } from "../BaseModel";
import { Staff } from "./Staff";
import { Route } from "./Route";
import { Car } from "./Car";

export class Trip extends BaseModel {
    timeStart ?: Date;
    CarId ?: string;
    Car ?: Car ;
    driveId ?: string;
    RouteId ?:string;
    Route ? : Route;
    drive ?: Staff;
    price ?: number;
}