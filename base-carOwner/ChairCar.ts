import {BaseModel} from "../BaseModel"

export class ChairCar extends BaseModel{
    public  codeChair ?: string;
    public CarId ?:string;
    public Car ?:string;
    public localFloor ?: number;
    public localRow ?: number;
    public localColumn ?: number;
    public description ?:string;
}