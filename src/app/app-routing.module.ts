import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeedetailsComponent } from './Employee/employeedetails/employeedetails.component';
import { EmployeelistComponent } from './Employee/employeelist/employeelist.component';

const routes: Routes = [
  {path:"employeelist",component:EmployeelistComponent},
  {path:"employeedetails",component:EmployeedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[EmployeelistComponent,EmployeedetailsComponent]
