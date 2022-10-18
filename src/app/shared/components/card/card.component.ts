import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() title: any;
  @Input() img!: any;
  @Input() description!: any;
  @Input() created_at!: any;
  @Input() updated_at!: any;

  constructor() {
    this.title = "";
    this.img = "../../../../assets/placeholder-image.png";
    this.description = "";
    this.created_at = ""
    this.updated_at = ""
  }

  ngOnInit(): void {}
}
