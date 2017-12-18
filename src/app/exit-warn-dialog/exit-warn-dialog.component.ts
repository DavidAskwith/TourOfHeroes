import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-exit-warn-dialog',
  templateUrl: './exit-warn-dialog.component.html',
  styleUrls: ['./exit-warn-dialog.component.css']
})
export class ExitWarnDialogComponent {

  constructor(public dialogRef: MatDialogRef<ExitWarnDialogComponent>) { }

  closeDialog(bool) {
    this.dialogRef.close(bool);
  }

}
