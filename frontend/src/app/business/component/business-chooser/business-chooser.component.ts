import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Observable } from 'rxjs';
import { Business } from '../../../core/model/business.model';

@Component({
  selector: 'hera-business-chooser',
  templateUrl: './business-chooser.component.html',
  styleUrls: ['./business-chooser.component.scss']
})
export class BusinessChooserComponent implements OnInit {

  businesses$!: Observable<Business[]>;

  constructor(
    private readonly employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.businesses$ = this.employeeService.getBusinessesWhereEmployed();
  }

}
