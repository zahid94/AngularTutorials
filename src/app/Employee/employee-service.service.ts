import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private url="/assets/Data/Emplyees.json";
  constructor(private http:HttpClient) { }

  getEmployee():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url);
  }
}
