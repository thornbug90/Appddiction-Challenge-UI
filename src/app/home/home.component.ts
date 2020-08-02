import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { ModalDialogComponent } from '../modals/modal-dialog/modal-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title = 'appddiction-challenge-ui';
  people: any[] = [];
  public displayedColumns: string[] = [
    'firstName',
    'lastName',
    'career'
  ]
  datasource;

  constructor(
    private personSvc: PersonService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getPeopleList();
    this.personSvc.getAllRegisteredUsers().subscribe(data => {
      this.datasource = new MatTableDataSource<any[]>(data);
    });
  }

  getPeopleList() {
    this.personSvc
      .getAllRegisteredUsers()
      .toPromise()
      .then((res) => {
        this.people = res;
      });
  }

  openAddModal() {
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      panelClass: 'add-modal',
      data: {},
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      this.getPeopleList();
    })
  }

}
