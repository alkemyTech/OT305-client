import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/app.animation';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [slideInAnimation]
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
