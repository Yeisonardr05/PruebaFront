import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'
import { EmployeeModel } from 'src/app/interfaces/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {
  employees: Array<EmployeeModel> = new Array<EmployeeModel>();
  name: string = "";
  isLoading: boolean = true;

  constructor(
    protected _employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this._employeeService.getAll(this.name).subscribe(resp => {
      this.employees = resp;
      this.isLoading = false;      
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.getAll();
  }
}
