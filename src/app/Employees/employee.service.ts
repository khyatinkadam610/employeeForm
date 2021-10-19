import {  Injectable, Output } from "@angular/core";
import { IEmployee } from "./employee";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class EmployeeService{
    
    employees: IEmployee[]=[
        { "employeeId": 1,
          "name": "hinata",
          "email": "hinata123@gmail.com",
          "contactno": 9898969992,
          "department": 2
        },
        {
          "employeeId": 2,
          "name": "naruto",
          "email": "naruto123@gmail.com",
          "contactno": 9898969994,
          "department": 1
        }
      ];
      private empobj = new BehaviorSubject<IEmployee[]>(this.employees);
      public share= this.empobj.asObservable();
    getEmployee():IEmployee[]{
        return this.employees;
    }
    getEmployeeById(id:number):IEmployee{
      // return(this.employees.filter(employee => employee.employeeId == id))
      let emp=this.employees.filter(employee => employee.employeeId == id)[0]
      console.log(emp)
      return emp;
      
    }
    addInList(fromDetails:IEmployee):void{
        console.log(fromDetails);
        this.employees.push(fromDetails)
        this.empobj.next(this.employees);
        console.log(this.employees)

    }
}