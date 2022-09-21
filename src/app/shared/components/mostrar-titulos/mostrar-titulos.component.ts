import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-titulos',
  templateUrl: './mostrar-titulos.component.html',
  styleUrls: ['./mostrar-titulos.component.scss']
})
export class MostrarTitulosComponent implements OnInit {
  @Input() title!: string 
  @Input() img!:string 
  
  constructor() { 
    this.title = '';
    this.img=  '../../../../assets/register.png'
  }
  ngOnInit() {}

}
