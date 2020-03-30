import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { AbsenceComponent } from './Absence/Absence.Comp';
import { DepartmentComponent } from './Department/Department.Comp';

const routes: Routes = [
  {path:'',redirectTo:'order',pathMatch:'full'},
  {path:'orders',component:OrdersComponent},
  {path:'absence',component:AbsenceComponent},
  {path:'dept',component:DepartmentComponent},
  {path:'order',children:[
    {path:'',component:OrderComponent},
    {path:'edit/:id',component:OrderComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
