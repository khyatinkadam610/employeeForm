import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from "./employee";
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-form',
  exportAs:'ngForm',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})

export class EmpFormComponent implements OnInit {
  id:number=0;
  
  constructor(private _employeesevice:EmployeeService,private _ActivatedRoute:ActivatedRoute) { }
  formdata:IEmployee={employeeId:0, email:"",name:"",department:0,contactno:0}

  ngOnInit(): void {
    console.log("inside oninit form");
    let temp=this._ActivatedRoute.snapshot.paramMap.get("id");
    this.id=parseInt(temp?temp:"0");
    // console.log(this.id);
    console.log("id ",this.id);
    if(this.id!=0){
      this.formdata=this._employeesevice.getEmployeeById(this.id);
    }

    // console.log("data ",this.formdata);
    
  }
  addEmployee():void{
    console.log("in form")
    this._employeesevice.addInList({
      "employeeId":3,
      "name": "sasuke",
      "email": "naruto123@gmail.com",
      "contactno": 9898969994,
      "department": 1
    });   
  }
  onSubmit():void{
  }
}