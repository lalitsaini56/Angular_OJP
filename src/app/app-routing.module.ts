import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ExceptionDashboardComponent } from './ojp-dashboard/exception-dashboard/exception-dashboard.component'



const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'auth', component: DashboardComponent},
  {path: 'dashboard', component: ExceptionDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
