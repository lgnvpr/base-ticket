export class BaseModel {
    public  _id ?: string
    public createBy ?: string;
    public createAt : Date ;
    public updateBy ?: string;
    public updateAt ?: Date;
    public status ?: Status
}


export enum Status {
    actived = "actived",
    deleted = "deleted",
  }
