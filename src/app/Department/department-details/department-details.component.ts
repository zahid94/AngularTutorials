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
    this.activeRoute.paramMap.subscribe((params:ParamMap)=>{
      this.Id=parseInt(params.get("Id"));
    });
  }
  goPrevious(){
      this.route.navigate(["../",this.Id-1],{relativeTo:this.activeRoute});
  }
  goNext(){
    this.route.navigate(["../",this.Id+1],{relativeTo:this.activeRoute});
  }
  goBack(){
    this.route.navigate(["../",{"Id":this.Id}],{relativeTo:this.activeRoute})
  }
}
