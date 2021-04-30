import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IDepartment } from './idepartment';
import { throwError } from "rxjs/internal/observable/throwError";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
private url="/assets/Data/Department.json";
  constructor(private http:HttpClient) { }

  departmentGet():Observable<IDepartment[]>{
   return this.http.get<IDepartment[]>(this.url)
   .pipe(catchError(this.errorHandller));
  }

  errorHandller(error:HttpErrorResponse){
    return throwError(error.message||"Internal server error");
  }
}
