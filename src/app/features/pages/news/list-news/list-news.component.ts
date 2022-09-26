import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {

  mode: boolean = true;
  novedades: Array<any> = []
  constructor() { }

  ngOnInit() {
   this.novedades = [{
    id: 0,
    image: "https://ongapi.alkemy.org/storage/rSpCdlZRC1.png",
    name: "novedad",
    description: "description",
    created_at: "2022-06-29T06:52:06.000000Z",
    update_at:"2022-09-22T22:09:29.000000Z"

   },
   {
    id: 1,
    image: "https://ongapi.alkemy.org/storage/rSpCdlZRC1.png",
    name: "novedad",
    description: "description",
    created_at:"2022-06-29T06:52:06.000000Z",
    update_at:"2022-09-22T22:09:29.000000Z"

   },
   {
    id: 2,
    image: "https://ongapi.alkemy.org/storage/rSpCdlZRC1.png",
    name: "novedad",
    description: "description",
    created_at: "2022-06-29T06:52:06.000000Z",
    update_at:"2022-09-22T22:09:29.000000Z"
   }
  ]
  }
  
}
