import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeedetailsComponent } from './Employee/employeedetails/employeedetails.component';
import { EmployeelistComponent } from './Employee/employeelist/employeelist.component';
import { EmployeeServiceService } from './Employee/employee-service.service';



@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailsComponent,
    EmployeelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
