import { BaseModel } from "../BaseModel";

export class Customer extends BaseModel{
    public name ?: string;
    public CMND ?: string ; 
    public phoneNumber ?: string;
    public email ?: string;
    public BirthAt ?: Date;
    public sex?: Sex;
    public avt ?: string;
    public imgThumbnailUrl ?: string[]

}

export enum Sex {
    male = "male",
    female = "female",
    gay = "gay",
    leg = "leg"
}
