import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from './Department.Mod';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  public formData: Department;

  constructor(public http: HttpClient) { }

  saveOrUpdateDepartment() {
    var body = {

    };
    return this.http.post(environment.apiURL + '/Department', body);
  }

  getDepartmentList() {
        return this.http.get<Department[]>(environment.apiURL + '/Department').toPromise();
  }

  getDepartmentByID(id:string):any {
    return this.http.get(environment.apiURL + '/Department/'+id).toPromise();
  }

  deleteDepartment(id:string) {
    return this.http.delete(environment.apiURL + '/Department/'+id).toPromise();
  }

}
