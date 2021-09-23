import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {

  constructor(private _employeesevice:EmployeeService) { }

  ngOnInit(): void {
  }
  addEmployee():void{
    console.log("in form")
    this._employeesevice.addInList({
      "name": "sasuke",
      "email": "naruto123@gmail.com",
      "contactno": 9898969994,
      "department": 1
    });   
  }

}
