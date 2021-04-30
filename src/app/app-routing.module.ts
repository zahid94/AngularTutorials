import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContractComponent } from './Department/department-details/contract/contract.component';
import { DepartmentDetailsComponent } from './Department/department-details/department-details.component';
import { OverviewComponent } from './Department/department-details/overview/overview.component';
import { DepartmentlistComponent } from './Department/departmentlist/departmentlist.component';
import { EmployeedetailsComponent } from './Employee/employeedetails/employeedetails.component';
import { EmployeelistComponent } from './Employee/employeelist/employeelist.component';
import { PageNotFountComponent } from './Error/page-not-fount/page-not-fount.component';

const routes: Routes = [
  { path: "", redirectTo: "/employee", pathMatch: "full" },

  { path: "employee", component: EmployeelistComponent },
  { path: "employeedetails", component: EmployeedetailsComponent },
  {
    path: "departments-list",
    component: DepartmentlistComponent
  },
  { 
    path: "departments-list/:Id", 
    component: DepartmentDetailsComponent,
    children: [
      { path: "contact", component: ContractComponent },
      { path: "overview", component: OverviewComponent }
    ]
   },

  { path: "**", component: PageNotFountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [EmployeelistComponent, EmployeedetailsComponent, PageNotFountComponent,
  DepartmentlistComponent, DepartmentDetailsComponent, ContractComponent, OverviewComponent]
