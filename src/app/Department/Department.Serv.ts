import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from './Department.Mod';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(public http: HttpClient) { }

  saveOrUpdateDepartment(formData: Department, isPost : boolean) {
	if (isPost)
		return this.http.post(environment.apiUrl + '/Department', formData).toPromise();
	else
		return this.http.put(environment.apiUrl + '/Department', formData).toPromise();
  }

  getDepartmentList() {
	return this.http.get<Department[]>(environment.apiUrl + '/Department').toPromise();
  }

  getDepartmentByID(id:string):any {
    return this.http.get(environment.apiUrl + '/Department/'+id).toPromise();
  }

  deleteDepartment(id:string) {
    return this.http.delete(environment.apiUrl + '/Department/'+id).toPromise();
  }

}
