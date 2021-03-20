import { Component, OnInit, Output } from '@angular/core';
import { OjpExceptionDashboardService } from '../../services/ojp-exception-dashboard.service';
import { Router, NavigationStart, NavigationEnd, Event } from '@angular/router'
import * as XLSX from 'xlsx';
import { PopupMessageService, MessageType } from '../../services/popup-message.service';


@Component({
  selector: 'app-exception-dashboard',
  templateUrl: './exception-dashboard.component.html',
  styleUrls: ['./exception-dashboard.component.css']
})
export class ExceptionDashboardComponent implements OnInit {
  IsDisplayAddEmployee: boolean = false;
  IsDisplayRemarks: boolean = false;
  IsDisplayExcelResult: boolean = false;
  employees: any;
  ExcelResult: string;
  apiResponse: any;
  ExcelResponse: string;
  IsNewEmployee: number = 0;
  ChangedStatus: boolean = true;
  updatedEmpID: string = '';
  RemarkEmpID: string;
  pages = [];
  showLoader: boolean = false;

  constructor(private ojpExceptionDashboard: OjpExceptionDashboardService,
    private _router: Router,
    private PopUp: PopupMessageService) {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoader = true;
        console.log('Yes');
      }

      if (routerEvent instanceof NavigationEnd) {
        // this.showLoader = false;
        console.log('Yes');
      }
    })
  }

  ngOnInit(): void {
    this.PopUp.DisplayPopMessage('Tilte', 'Piyush', MessageType.alert)
    //this.getexceptionEmployee('', 1);
  }

  getexceptionEmployee(EmpID: string, page: number) {
    this.showLoader = true;
    this.ojpExceptionDashboard.getOjpExceptionEmployees('', 1).subscribe((res) => {
      console.log(res);
      this.employees = res.Data;
      let totalRecords = res.NoOfRecords;
      let page_size = 5;
      let MaxPages = 10;
      let TotalPages = totalRecords / page_size;
      if (totalRecords % page_size != 0)
        TotalPages++;

      this.pages = [];
      for (let i = 1; i <= TotalPages && i <= MaxPages; i++)
        this.pages.push(i);
        this.showLoader = false;
    })
  }

  AddEmployee() {
    this.IsDisplayAddEmployee = true;
    this.IsNewEmployee = 1;

  }

  DisplayRemarks(employee: any) {
    this.IsDisplayRemarks = true;
    this.RemarkEmpID = employee.EmpID;
  }

  CloseRemarksModel(IsDisplayRemarks: boolean) {
    this.IsDisplayRemarks = IsDisplayRemarks;
  }

  CloseAddEmployeeModel(IsDisplayAddEmployee: boolean) {
    console.log(IsDisplayAddEmployee);
    this.IsDisplayAddEmployee = IsDisplayAddEmployee;
  }

  SearchEmployee(Empid: string) {
    this.ojpExceptionDashboard.getOjpExceptionEmployees(Empid, 0).subscribe((res) => {
      console.log(res);
      this.employees = res.Data;
      console.log(this.employees);
    })
  }

  OnChangeStatus(empid: string, evt: any) {
    this.IsDisplayAddEmployee = true;
    this.IsNewEmployee = 0;
    this.ChangedStatus = evt.target.checked;
    this.updatedEmpID = empid;
    console.log(this.ChangedStatus);
  }

  CloseExcelModel(IsDisplayExcelResult: boolean) {
    this.IsDisplayExcelResult = false;
  }

  UploadFile(evt: any) {
    const reader = new FileReader();
    const file = evt.target.files[0];
    this.showLoader = true;
    reader.onload = (event) => {
      const data = reader.result;
      let workBook = XLSX.read(data, { type: 'binary' });
      let jsonData = workBook.SheetNames.reduce((data, name) => {
        const sheet = workBook.Sheets[name];
        data = XLSX.utils.sheet_to_json(sheet);
        return data;
      }, {});
      for (var i = 0; i < (jsonData as any[]).length; i++) {
        jsonData[i]['UserID'] = "1234";
        jsonData[i]['isNew'] = true;
        jsonData[i]['Status'] = jsonData[i]['Status'] == 1 ? true : false;
      }
      this.ExcelResult = JSON.stringify(jsonData);

      this.ojpExceptionDashboard.saveOJPExceptionEmployee(this.ExcelResult).subscribe((res) => {
        console.log(res);
        this.IsDisplayExcelResult = true;
        this.ExcelResponse = res.ResponseStatus;
      });
      console.log(this.ExcelResult);
    }
    reader.readAsBinaryString(file);
    this.getexceptionEmployee('', 1);
  }

  onPageChange(evt: any) {
    console.log(evt.target.textContent);
    this.getexceptionEmployee('', evt.target.textContent);
  }

}
