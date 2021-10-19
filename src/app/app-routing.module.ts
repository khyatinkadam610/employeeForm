import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpFormComponent } from './Employees/emp-form.component';
import { EmployeeTableComponent } from './Employees/employee-table.component';

const routes: Routes = [
  {path:'employeetable',component:EmployeeTableComponent},
  {path:'form/:id',component:EmpFormComponent},
  {path:'',redirectTo:'employeetable',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
