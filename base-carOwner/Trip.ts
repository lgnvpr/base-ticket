import { BaseModel } from "../BaseModel";
import { Staff } from "./Staff";

export class Trip extends BaseModel {
    timeStart ?: Date;
    CarId ?: string;
    driveId ?: string;
    drive ?: Staff;
    price ?: number;
}