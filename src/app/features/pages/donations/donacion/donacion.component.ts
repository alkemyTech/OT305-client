import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.component.html',
  styleUrls: ['./donacion.component.scss']
})
export class DonacionComponent implements OnInit {

  text: string = "";

  formattedAmount:any;
  amount:any;

  @Input() newText: string | null | undefined;

  constructor(private currencyPipe : CurrencyPipe) {
  }

  ngOnInit(): void {
    if(this.newText != null && this.newText != undefined){
      this.text = this.newText;
    }
  }

  transformAmount(element:any){
    this.formattedAmount = this.currencyPipe.transform(this.formattedAmount, '$');

    element.target.value = this.formattedAmount;
}

}
