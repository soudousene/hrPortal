import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Absence } from './Absence.Mod';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
  public formData: Absence;

  constructor(public http: HttpClient) { }

  saveOrUpdateAbsence() {
    var body = {

    };
    return this.http.post(environment.apiURL + '/Absence', body);
  }

  getAbsenceList() {
        return this.http.get<Absence[]>(environment.apiURL + '/Absence').toPromise();
  }

  getAbsenceByID(id:string):any {
    return this.http.get(environment.apiURL + '/Absence/'+id).toPromise();
  }

  deleteAbsence(id:string) {
    return this.http.delete(environment.apiURL + '/Absence/'+id).toPromise();
  }

}
