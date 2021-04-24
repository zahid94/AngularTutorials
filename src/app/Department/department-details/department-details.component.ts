import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  public Id:number
  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.Id=parseInt(this.activeRoute.snapshot.paramMap.get("Id"));
  }

}
