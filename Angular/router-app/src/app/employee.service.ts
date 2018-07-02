import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url = '/assets/data/employees.json';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
      .catch(this.errorHandler);
    // return [
    //   {'employee_id': 1, 'employee_name': 'Andrew', 'employee_age': 30},
    //   {'employee_id': 2, 'employee_name': 'Brandon', 'employee_age': 25},
    //   {'employee_id': 3, 'employee_name': 'Christina', 'employee_age': 26},
    //   {'employee_id': 4, 'employee_name': 'Elena', 'employee_age': 28}
    // ];
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }
}
