import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit{
 
    employees:IEmployee[]=[];
  // employees:IEmployee[] = [
  //   {
  //     "employeeId": 1,
  //     "name": "hinata",
  //     "email": "hinata123@gmail.com",
  //     "birthDate": "7/10/2000",
  //     "contactno": 9898969992,
  //     "department": "Managed Service"

  //   },
  //   {

  //     "employeeId": 2,
  //     "name": "naruto",
  //     "email": "naruto123@gmail.com",
  //     "birthDate": "6/10/2000",
  //     "contactno": 9898969994,
  //     "department": "HR Service"
  //   }
  // ]
  constructor(private _employeeservice:EmployeeService) {
  }
  
// ngOnChanges():void{
//   console.log("inside on change")
//   this.employees=this._employeeservice.getEmployee();
// }
  ngOnInit(): void {
    // console.log("inside on inint")
     
    // this.employees=this._employeeservice.getEmployee();
    // console.log(this.employees)
    this._employeeservice.share.subscribe(x=>{
      console.log(x);
      this.employees=x;
    })
  }
}
