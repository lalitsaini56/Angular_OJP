export interface APIResponse{
  Data: any;
  NoOfRecords: number;
  ResponseCode: number;
  ResponseStatus: string;
}


export class SaveExceptionEmployeeModel{
  empID: string;
  userid: number;
  status: boolean;
  isNew: boolean;
  remarks: string;
  }


