import {BaseModel} from "../BaseModel"

export class ChairCar extends BaseModel{
    public  codeChair ?: string;
    public CarId ?:string;
    public priceChair ?:number;
    public localFloor ?: string;
    public localRow ?: string;
    public localColumn ?: string;
    public description ?:string;
}