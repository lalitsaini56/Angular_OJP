import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OjpExceptionDashboardService } from '../../services/ojp-exception-dashboard.service';
import { APIResponse } from '../../model/api.model';
import { SaveExceptionEmployeeModel } from '../../model/api.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css', '../../global/css/modal.css']
})
export class AddEmployeeComponent implements OnInit {
  @Output() IsDisplayAddEmployee = new EventEmitter<boolean>()
  @Input() IsNewEmployee: number;
  @Input() ChangedStatus: boolean;
  @Input() UpdatedEmpID: string;
  @Output("getexceptionEmployee") getexceptionEmployee: EventEmitter<any> = new EventEmitter();
  constructor(
    private ojpExceptionDashboard: OjpExceptionDashboardService,
  ) { }


  IsDisplayEmpDetails: boolean = false;
  IsDisplayRemaks: boolean = false;
  IsDisplayEmpID: boolean = true;
  employee: any;
  EmployeeDetail: SaveExceptionEmployeeModel;
  NewEmpID: string;
  btnText: string;

  ngOnInit(): void {
    if (this.IsNewEmployee == 1) {
      this.IsDisplayEmpID = true;
      this.IsDisplayRemaks = false;
      this.btnText = "Add"
    }

    else {
      this.IsDisplayEmpID = false;
      this.IsDisplayEmpDetails = false;
      this.IsDisplayRemaks = true;
      this.btnText = "Update"
    }
  }

  CloseAddEmployeeModel() {
    this.IsDisplayAddEmployee.emit(false);
  }

  SaveEmployeeDetails(remarks: string) {

    let userID = 1;

    this.EmployeeDetail = new SaveExceptionEmployeeModel();
    this.EmployeeDetail.remarks = remarks;
    this.EmployeeDetail.userid = userID;

    if (this.IsNewEmployee == 1){
    this.EmployeeDetail.empID = this.NewEmpID;
    this.EmployeeDetail.isNew = true;
    this.EmployeeDetail.status = true;
    }

    else{
      this.EmployeeDetail.empID = this.UpdatedEmpID;
      this.EmployeeDetail.isNew = false;
      this.EmployeeDetail.status = this.ChangedStatus;
    }

    var EmployeeList = [];
    EmployeeList.push(this.EmployeeDetail);
    console.log(JSON.stringify(EmployeeList));
    this.ojpExceptionDashboard.saveOJPExceptionEmployee(JSON.stringify(EmployeeList)).subscribe((res) => {
      console.log(res);
    })
    this.getexceptionEmployee.emit();
    this.IsDisplayAddEmployee.emit(false);
  }

  GetEmployeeDetails(evt: any) {
    this.NewEmpID = evt.target.value;
    this.ojpExceptionDashboard.getEmployeeBasicDetails(evt.target.value).subscribe(res => {
      console.log(res);
      if (res.NoOfRecords != 0) {
        this.IsDisplayEmpID = false;
        this.IsDisplayRemaks = true;
        this.IsDisplayEmpDetails = true;
        this.employee = res.Data;
        this.NewEmpID = evt.target.value;
      }
    })


  }
}
