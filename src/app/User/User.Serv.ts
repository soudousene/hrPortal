import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User.Mod';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public formData: User;

  constructor(public http: HttpClient) { }

  saveOrUpdateUser() {
    var body = {

    };
    return this.http.post(environment.apiURL + '/User', body);
  }

  getUserList() {
        return this.http.get<User[]>(environment.apiURL + '/User').toPromise();
  }

  getUserByID(id:string):any {
    return this.http.get(environment.apiURL + '/User/'+id).toPromise();
  }

  deleteUser(id:string) {
    return this.http.delete(environment.apiURL + '/User/'+id).toPromise();
  }

}
