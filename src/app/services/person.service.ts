import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getAllRegisteredUsers() {
    return this.http.get(`${environment.url}/person/get-all`) as Observable<any>;
  }

  addPerson(ob: any) {
    return this.http.post(`${environment.url}/person/save`, ob) as Observable<any>;
  }

  deleteEntry(id: string) {
    return this.http.post(environment.url + '/person/delete', id) as Observable<any>;
  }

}
