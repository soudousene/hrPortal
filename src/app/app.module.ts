import { UserComponent } from './User/User.Comp';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AllEnums } from './Enumerations';
import { AbsenceComponent } from './Absence/Absence.Comp';
import { DepartmentComponent } from './Department/Department.Comp';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { PwdLostComponent } from './login/pwdLost.component';

@NgModule({
declarations:   [
    AppComponent,
    AbsenceComponent,
    DepartmentComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    PwdLostComponent
    ,UserComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot(),
	  BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule
    ],
  entryComponents:[
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    AllEnums,
	{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ErrorInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
