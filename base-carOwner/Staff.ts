import {BaseModel} from "../BaseModel";
export class Staff extends BaseModel{
    public name ?:string;
    public identityCard ?: string;
    public birthAt ?: Date;
    public adress ?:string;
    public positionId ?: string 
    public avt ?: string;

}