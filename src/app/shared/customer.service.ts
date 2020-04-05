import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) { }

  getCustomerList() {
    let resp = this.http.get<Customer[]>(environment.apiUrl+'/Customer');
    return resp;
   }
}
