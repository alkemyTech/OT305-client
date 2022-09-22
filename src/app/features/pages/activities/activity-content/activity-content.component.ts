import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-activity-content",
  templateUrl: "./activity-content.component.html",
  styleUrls: ["./activity-content.component.scss"],
})
export class ActivityContentComponent implements OnInit {
  content: any = {
    id: 2103,
    name: "Titulo Actividad",
    slug: null,
    description:
      "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, temporibus eaque vitae magni dolore commodi repellat iste esse accusantium dolor.</p>",
    image: "http://ongapi.alkemy.org/storage/IRfmZkuVtg.png",
    user_id: null,
    category_id: null,
    created_at: "2022-09-22T16:40:13.000000Z",
    updated_at: "2022-09-22T16:40:13.000000Z",
    deleted_at: null,
    group_id: null,
  };

  constructor() {}

  ngOnInit(): void {}
}
