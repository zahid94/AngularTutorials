import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './iemployee';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private url = "/assets/Data/Emplyees.json";
  constructor(private http: HttpClient) { }

  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Internal server error.");
  }
}
