import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  token: string | null = null;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("token") != null && localStorage.getItem("token") != undefined){
      this.token = localStorage.getItem("token")
    }
      
  }
  logout(){
    localStorage.removeItem("token");
  }
}
