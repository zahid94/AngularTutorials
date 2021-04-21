import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  getEmployee(){
    return [
      {"Id":1,"Name":"angular"},
      {"Id":2,"Name":"angularjs"}
    ]
  }
}
