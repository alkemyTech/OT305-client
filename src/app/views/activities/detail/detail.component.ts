import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  actividad: any = {
    id: 2061,
    name: "Programas Educativos",
    slug: null,
    description:
      "<p>Esta es una actividad de prueba</p><br/><h4>Actividad de Prueba</h4><br/><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias pariatur voluptas necessitatibus, doloremque labore ratione harum, nostrum, id repudiandae accusamus veritatis? Ut, reprehenderit consequatur corporis dolores incidunt aspernatur magnam veritatis?</p>",
    image: "http://ongapi.alkemy.org/storage/3QyD19G1LO.jpeg",
    user_id: 0,
    category_id: 0,
    created_at: "2022-09-15T19:11:51.000000Z",
    updated_at: "2022-09-15T22:31:25.000000Z",
    deleted_at: null,
    group_id: null,
  };

  constructor() {}

  ngOnInit(): void {}
}
