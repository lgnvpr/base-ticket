import { BaseModel } from "../BaseModel";
import { Route } from "./Route";
import { Staff } from "./Staff";
import { Route } from "./Route";

export class Trip extends BaseModel {
    timeStart ?: Date;
    CarId ?: string;
    driveId ?: string;
    RouteId ?:string;
    Route ? : Route;
    drive ?: Staff;
    price ?: number;
}