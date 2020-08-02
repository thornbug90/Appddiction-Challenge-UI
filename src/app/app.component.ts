import { Component, OnInit } from '@angular/core';
import { PersonService } from './services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'appddiction-challenge-ui';
  people: any[] = [];

  constructor(private personSvc: PersonService) {}
  ngOnInit() {
    this.getPeopleList();
  }

  getPeopleList() {
    this.personSvc
      .getAllRegisteredUsers()
      .toPromise()
      .then((res) => {
        this.people = res;
      });
  }
}
