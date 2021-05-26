import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BusinessState, selectSelectedId } from '../../state/state/business.state';
import { EmployeeService } from '../../service/employee.service';
import { Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Employee } from '../../../core/model/employee.model';

@Component({
  selector: 'hera-employee-manager',
  templateUrl: './employee-manager.component.html',
  styleUrls: ['./employee-manager.component.scss']
})
export class EmployeeManagerComponent implements OnInit, OnDestroy {

  employees?: Employee[];
  private subscription!: Subscription;

  constructor(
    private readonly store$: Store<{ business: BusinessState }>,
    private readonly employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.subscription = this.store$.select(selectSelectedId).pipe(
      mergeMap(id => this.employeeService.getEmployeesOfBusiness(id as number))
    ).subscribe(employees => this.employees = employees);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
