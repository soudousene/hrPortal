import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User.Mod';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  saveOrUpdateUser(formData: User, isPost : boolean) {
	if (isPost)
		return this.http.post(environment.apiUrl + '/User', formData).toPromise();
	else
		return this.http.put(environment.apiUrl + '/User', formData).toPromise();
  }

  getUserList() {
	return this.http.get<User[]>(environment.apiUrl + '/User').toPromise();
  }

  getUserByID(id:string):any {
    return this.http.get(environment.apiUrl + '/User/'+id).toPromise();
  }

  deleteUser(id:string) {
    return this.http.delete(environment.apiUrl + '/User/'+id).toPromise();
  }

}
