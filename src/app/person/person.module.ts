import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
console.log('person module')

@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule
  ],
  exports:[
    LoginComponent,
    ListComponent
  ]
})
export class PersonModule { }
