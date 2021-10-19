import { Component } from '@angular/core';
import { EmployeeService } from './Employees/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmployeeService]
})
export class AppComponent {
  title = 'employeeFormdata';
}
