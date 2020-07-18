import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { EmployeeModel } from '../interfaces/employee.model'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIENPOINT } from '../config/configuration';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    protected _httpClient: HttpClient
  ) { }

  getAll(name: string): Observable<Array<EmployeeModel>> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Access-Control-Allow-Origin', '*');
    
    return this._httpClient.get<Array<EmployeeModel>>(`${environment.apiURL}${APIENPOINT.getAllEmployee}${name}`, { headers: headers });
  }
}
