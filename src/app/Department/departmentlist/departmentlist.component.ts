import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {

  public departments = [];
  public SelectedId:number;
  public errorsmg = "";
  constructor(private service: DepartmentService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.departmentGet()
      .subscribe(data => { this.departments = data },
        error => this.errorsmg == error);

    this.activeRoute.paramMap.subscribe((param: ParamMap) => {
      this.SelectedId = parseInt(param.get("Id"))
    });
  }
  onSelected(department) {
    this.router.navigate(["/departments", department.Id]);
  }

  IsSelected(department){
    console.log(department.Id===this.SelectedId);
    return department.Id===this.SelectedId;
  }
}
