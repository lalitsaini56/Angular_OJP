import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OjpExceptionDashboardService } from '../../services/ojp-exception-dashboard.service';

@Component({
  selector: 'app-remarks',
  templateUrl: './remarks.component.html',
  styleUrls: [ '../../global/css/modal.css', './remarks.component.css']
})
export class RemarksComponent implements OnInit {

  @Output() IsDisplayRemarks = new EventEmitter<boolean>();
  @Input() RemarkEmpID: string;

  Remarks: any;

  constructor(private ojpExceptionDashboard: OjpExceptionDashboardService) { }

  ngOnInit(): void {
    this.ojpExceptionDashboard.getOJPExceptionEmpComments(this.RemarkEmpID).subscribe(res => {
      console.log(res);
      this.Remarks = res.Data;
    })

  }

  CloseRemarksModel(){
    this.IsDisplayRemarks.emit(false);
  }

}
