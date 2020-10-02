import {BaseModel} from "../BaseModel"

export class ChairCar extends BaseModel{
    public  codeChair ?: string;
    public CarId ?:string;
    public priceChair ?:string;
    public localFloor ?: string;
    public localRow ?: string;
    public localColumn ?: string;
    public description ?:string;
}