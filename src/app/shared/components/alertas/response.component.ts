import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {

  imagen: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    message: string,
    title: string,
    type: string
    }, private mdDialogRef: MatDialogRef<ResponseComponent>){}

  
  ngOnInit(): void {
    if(this.data.type === "Success"){
      this.imagen = "assets/success.gif"
    } else {
      this.imagen = "assets/error.gif"
    }
  }

  public close() {
    this.mdDialogRef.close();
  }
  @HostListener("keydown.esc") 
  public onEsc() {
    this.close();
  }

}
