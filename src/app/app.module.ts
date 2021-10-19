import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './Employees/employee-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpFormComponent } from './Employees/emp-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
    EmpFormComponent

  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  // exports:[
  //   FormsModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
