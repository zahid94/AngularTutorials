import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  public Emplyees=[];
  constructor(private empService:EmployeeServiceService) { }

  ngOnInit(): void {
    this.Emplyees=this.empService.getEmployee();
  }

  


}