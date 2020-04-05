import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { OrderItemsComponent } from './orders/order-items/order-items.component';
import { OrderService } from './shared/order.service';
import { AllEnums } from './Enumerations';
import { AbsenceComponent } from './Absence/Absence.Comp';
import { DepartmentComponent } from './Department/Department.Comp';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

@NgModule({
declarations:   [
    AppComponent,
    OrdersComponent,
    OrderComponent,
    OrderItemsComponent,
    AbsenceComponent,
    DepartmentComponent,
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent
    ],
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
    OrderItemsComponent
  ],
  providers: [
    OrderService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    AllEnums,
	{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
	{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
