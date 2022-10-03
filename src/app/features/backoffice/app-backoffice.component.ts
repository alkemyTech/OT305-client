import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/app.animation';

@Component({
  selector: 'app-app-backoffice',
  templateUrl: './app-backoffice.component.html',
  styleUrls: ['./app-backoffice.component.scss'],
  animations: [slideInAnimation]
})
export class AppBackofficeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
