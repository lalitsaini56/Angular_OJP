import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-bulk-upload',
  templateUrl: './bulk-upload.component.html',
  styleUrls: ['./bulk-upload.component.css', '../../global/css/modal.css']
})
export class BulkUploadComponent implements OnInit {

  @Input() ExcelResponse: string;
  @Output() IsDisplayExcelResult = new EventEmitter<boolean>();

  AlreadyActiveEmployees: Array<string>;
  NotExitEmployees: Array<string>;



  constructor() { }

  ngOnInit(): void {
     let ExcelResult: Array<string> = this.ExcelResponse.split(";");
    //SuccessEmployee + ";" + AlreadyActiveEmployee + ";" + NotExitEmployee;
    if(ExcelResult[1] != "" || ExcelResult[2] != ""){
    if (ExcelResult[1] != "")
      this.AlreadyActiveEmployees = ExcelResult[1].split(',');

    if (ExcelResult[2] != "")
      this.NotExitEmployees = ExcelResult[2].split(',');
    }

    else{}

  }

  CloseExcelModel() {
    this.IsDisplayExcelResult.emit(false);
  }
}
