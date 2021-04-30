import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartmentDetailsComponent } from './Department/department-details/department-details.component';
import { DepartmentlistComponent } from './Department/departmentlist/departmentlist.component';
import { EmployeedetailsComponent } from './Employee/employeedetails/employeedetails.component';
import { EmployeelistComponent } from './Employee/employeelist/employeelist.component';
import { PageNotFountComponent } from './Error/page-not-fount/page-not-fount.component';

const routes: Routes = [
  {path:"",redirectTo:"/employee", pathMatch:"full"},
  
  {path:"employee",component:EmployeelistComponent},
  {path:"employeedetails",component:EmployeedetailsComponent},
  {path:"departments-list",component:DepartmentlistComponent},
  {path:"departments-list/:Id",component:DepartmentDetailsComponent},

  {path:"**",component:PageNotFountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[EmployeelistComponent,EmployeedetailsComponent,PageNotFountComponent,
  DepartmentlistComponent,DepartmentDetailsComponent]
