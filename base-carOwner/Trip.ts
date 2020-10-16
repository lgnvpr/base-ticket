import { BaseModel } from "../BaseModel";
import { Car } from "./Car";
import { Route } from "./Route";
import { Staff } from "./Staff";

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