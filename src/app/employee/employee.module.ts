import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
console.log('Employee module')

@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  exports:[
    LoginComponent,
    ListComponent
  ]
})
export class EmployeeModule { }
