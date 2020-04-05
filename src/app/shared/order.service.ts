import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { OrderItem } from './order-item.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public formData: Order;
  public orderItems: OrderItem[];

  constructor(public http: HttpClient) { }

  saveOrUpdateOrder() {
    var body = {
      ...this.formData,
      OrderItems: this.orderItems
    };
    return this.http.post(environment.apiUrl + '/Order', body);
  }

  getOrderList() {
    return this.http.get(environment.apiUrl + '/Order').toPromise();
  }

  getOrderByID(id:number):any {
    return this.http.get(environment.apiUrl + '/Order/'+id).toPromise();
  }

  deleteOrder(id:number) {
    return this.http.delete(environment.apiUrl + '/Order/'+id).toPromise();
  }

}
