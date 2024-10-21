import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdminModule} from './admin/admin.module';
import {UserModule} from './user/user.module';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UserlistComponent } from './userlist/userlist.component';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { CountrycodePipe } from './countrycode.pipe';
import { CustomHeadingDirective } from './custom-heading.directive';
import { JokeComponent } from './joke/joke.component'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AdminlistComponent,
    UserlistComponent,
    ChildComponent,
    CountrycodePipe,
    CustomHeadingDirective,
    JokeComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
