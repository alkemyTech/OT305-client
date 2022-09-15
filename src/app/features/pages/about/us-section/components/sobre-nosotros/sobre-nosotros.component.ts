import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.scss']
})
export class SobreNosotrosComponent implements OnInit {

  @Input() textoParaMostrar!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
