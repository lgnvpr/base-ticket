import { BaseModel } from "../BaseModel";
import { Staff } from "./Staff";

export class Account extends BaseModel {
    username?: string;
    password?: string;
    staffId?: string;
    staff ?: Staff
}