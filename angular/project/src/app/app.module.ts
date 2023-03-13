import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import  {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListemployeeComponent } from './employee/listemployee/listemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    NavbarComponent,
    ListemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
