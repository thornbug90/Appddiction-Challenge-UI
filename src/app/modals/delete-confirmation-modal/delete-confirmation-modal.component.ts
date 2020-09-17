import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonService } from 'src/app/services/person.service';
// import { timeStamp } from 'console';

@Component({
  selector: 'app-delete-confirmation-modal',
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrls: ['./delete-confirmation-modal.component.sass']
})
export class DeleteConfirmationModalComponent implements OnInit {
  id: any;
  // contact: Contact;

  constructor(
    private ps: PersonService,
    private dialogRef: MatDialogRef<DeleteConfirmationModalComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.id = data.value.toString();
  }

  ngOnInit(): void {
  }


  onConfirmDelete() {

    this.ps.deleteEntry(this.id).toPromise().then(res => {

    });
    this.dialogRef.close();
    // this.snotify.success('Contact deleted :)');
  }

}
