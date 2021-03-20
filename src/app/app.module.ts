import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {  HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './ojp-dashboard/add-employee/add-employee.component';
import { RemarksComponent } from './ojp-dashboard/remarks/remarks.component';
import { ExceptionDashboardComponent } from './ojp-dashboard/exception-dashboard/exception-dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { BulkUploadComponent } from './ojp-dashboard/bulk-upload/bulk-upload.component';
import { UserAccountComponent } from './user-account/user-account.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddEmployeeComponent,
    RemarksComponent,
    ExceptionDashboardComponent,
    AuthComponent,
    BulkUploadComponent,
<<<<<<< HEAD
    UserAccountComponent
=======
    DashboardComponent,
>>>>>>> ba0736ff138e6db7c582f25e0d1de577af3e0b01
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
