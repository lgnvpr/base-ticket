import {BaseModel} from "../BaseModel";
import { PostionStaff } from "./PostionStaff";
export class Staff extends BaseModel{
    public name ?:string;
    public identityCard ?: string;
    public birthAt ?: Date;
    public address ?:string;
    public positionId ?: string 
    public avt ?: string;
    public position ?: PostionStaff;
    public phoneNumer ?: string;
    public sex?: string;
}