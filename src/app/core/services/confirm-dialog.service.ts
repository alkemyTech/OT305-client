import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AlertasComponent } from 'src/app/shared/components/alertas/alertas.component';

@Injectable()
export class ConfirmDialogService {
  constructor(private dialog: MatDialog) { }
  dialogRef:MatDialogRef<AlertasComponent> | undefined;
  
  public open(options: any) {
    this.dialogRef = this.dialog.open(AlertasComponent, {    
         data: {
           title: options.title,
           message: options.message,
           cancelText: options.cancelText,
           confirmText: options.confirmText
         }
    });
  }
  public confirmed(): Observable<any> {
    
    return this.dialogRef!.afterClosed().pipe(take(1), map(res => {
        return res;
      }
    ));
  }
}