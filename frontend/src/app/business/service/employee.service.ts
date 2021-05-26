import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Business } from '../../core/model/business.model';
import { REST_API } from '../../../environments/environment';
import { Employee } from '../../core/model/employee.model';

@Injectable()
export class EmployeeService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getBusinessesWhereEmployed(): Observable<Business[]> {
    return this.httpClient.get<Business[]>(`${REST_API}/employee`);
  }

  getEmployeesOfBusiness(businessId: number): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${REST_API}/employee/business/${businessId}`);
  }

}
