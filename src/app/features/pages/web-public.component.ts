import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/app.animation';

@Component({
  selector: 'app-web-public',
  templateUrl: './web-public.component.html',
  styleUrls: ['./web-public.component.scss'],
  animations: [slideInAnimation]
})
export class WebPublicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
