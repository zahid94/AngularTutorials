import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  public Emplyees=[];
  constructor(private empservice:EmployeeServiceService) { }

  ngOnInit(): void {
    this.empservice.getEmployee()
      .subscribe(data=>this.Emplyees=data);
  }

  

}
