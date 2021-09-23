import {  Injectable, Output } from "@angular/core";
import { IEmployee } from "./employee";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class EmployeeService{
    
    employees: IEmployee[]=[
        {
         
          "name": "hinata",
          "email": "hinata123@gmail.com",
       
          "contactno": 9898969992,
          "department": 2
    
        },
        {
    
          
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
    addInList(fromDetails:IEmployee):void{
        console.log(fromDetails);
        this.employees.push(fromDetails)
        this.empobj.next(this.employees);
        console.log(this.employees)

    }
}