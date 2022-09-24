import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() img!:string;
  @Input() description!:string;
  
  constructor() { 
    this.title = '';
    this.img = '../../../../assets/placeholder-image.png';
    this.description = '';
  }

  ngOnInit(): void {
  }

}
