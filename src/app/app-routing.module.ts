import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeedetailsComponent } from './Employee/employeedetails/employeedetails.component';
import { EmployeelistComponent } from './Employee/employeelist/employeelist.component';
import { PageNotFountComponent } from './Error/page-not-fount/page-not-fount.component';

const routes: Routes = [
  {path:"",redirectTo:"/employeelist", pathMatch:"full"},
  
  {path:"employeelist",component:EmployeelistComponent},
  {path:"employeedetails",component:EmployeedetailsComponent},

  {path:"**",component:PageNotFountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[EmployeelistComponent,EmployeedetailsComponent,PageNotFountComponent]
