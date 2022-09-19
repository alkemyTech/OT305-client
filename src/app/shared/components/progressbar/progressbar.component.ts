import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit, OnChanges {
  
  modoDeVista: any = "determinate";

  @Input() mode: boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.cambiarModoDeVista();
  }

  ngOnInit(): void {}

  cambiarModoDeVista(){

    if( this.mode === true ){
      this.modoDeVista = "indeterminate";
    }
    else{
      this.modoDeVista = "determinate";
    }

  }
}
