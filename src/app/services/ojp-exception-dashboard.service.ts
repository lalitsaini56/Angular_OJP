import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, ErrorObserver } from 'rxjs'
import {APIResponse,  SaveExceptionEmployeeModel} from '../model/api.model'



@Injectable({
  providedIn: 'root'
})
export class OjpExceptionDashboardService {
  constructor(private http: HttpClient) { }

  _apiPath: string = 'http://localhost/EGES/';

  getOjpExceptionEmployees(EmpID: string, PageNo: number): Observable<APIResponse> {
    const url: string = this._apiPath + "GetOJPExceptionEmployees";
    return (this.http.post<any>(url,
      {'EmpID' : EmpID,
      'Page' : PageNo},
      {headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })}
    ));
  }

  getEmployeeBasicDetails(EmpID: string): Observable<APIResponse>{
     return(this.http.get<any>(this._apiPath + "OJPExceptionEmpBasic?EmpID=" + EmpID));
  }

  getOJPExceptionEmpComments(EmpID: string): Observable<APIResponse>{
    return(this.http.get<any>(this._apiPath + "GetOJPExceptionEmpComments?EmpID=" + EmpID));
 }


  saveOJPExceptionEmployee(employeeData: any): Observable<APIResponse> {
    const url: string = this._apiPath + "SaveOJPExceptionEmployee";
     return (this.http.post<APIResponse>(url, employeeData,{headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}
    ))
  }


  oJPExceptionEmpBasic(): Observable<APIResponse> {
    const url: string = this._apiPath + "OJPExceptionEmpBasic";
    return (this.http.post<any>(url,
      {'EmpID' : '',
      'Page' : 1},
      {headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })}
    ));
  }

}
