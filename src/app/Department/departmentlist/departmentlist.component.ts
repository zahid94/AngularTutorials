import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {

  public departments=[];
  public errorsmg="";
  constructor(private service:DepartmentService,private router:Router) { }

  ngOnInit(): void {
    this.service.departmentGet()
    .subscribe(data=>{this.departments=data},
      error=>this.errorsmg==error);
  }
  onSelected(department){
  this.router.navigate(["/departments",department.Id]);
  }
}
