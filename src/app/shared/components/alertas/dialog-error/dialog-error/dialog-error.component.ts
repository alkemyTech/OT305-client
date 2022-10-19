import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-error',
  templateUrl: './dialog-error.component.html',
  styleUrls: ['./dialog-error.component.scss']
})
export class DialogErrorComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      message: string
    },
    private dialogRef: MatDialogRef<DialogErrorComponent>
  ) { }

  ngOnInit(): void {
  }

  onClick(){
    this.dialogRef.close();
  }

}
