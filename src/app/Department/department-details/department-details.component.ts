import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  public Id:number
  constructor(private activeRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    // this.Id=parseInt(this.activeRoute.snapshot.paramMap.get("Id"));
    this.activeRoute.paramMap.subscribe((params:ParamMap)=>{
      this.Id=parseInt(params.get("Id"));
    });
  }
  goPrevious(){
      this.route.navigate(["/departments",this.Id-1]);
  }
  goNext(){
    this.route.navigate(["/departments",this.Id+1]);
  }
  goBack(){
    this.route.navigate(["/departments",{"Id":this.Id}])
  }
}
