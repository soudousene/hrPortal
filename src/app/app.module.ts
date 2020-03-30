import { UserComponent } from './User/User.Comp';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { OrderItemsComponent } from './orders/order-items/order-items.component';
import { OrderService } from './shared/order.service';
import { AllEnums } from './Enumerations';
import { AbsenceComponent } from './Absence/Absence.Comp';
import { DepartmentComponent } from './Department/Department.Comp';

@NgModule({
  declarations:   [
    AppComponent,
    OrdersComponent,
    OrderComponent,
    OrderItemsComponent,
    AbsenceComponent,
    DepartmentComponent
  ,UserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  entryComponents:[
    OrderItemsComponent
  ],
  providers: [
    OrderService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    AllEnums
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
