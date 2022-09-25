import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-activity-content",
  templateUrl: "./activity-content.component.html",
  styleUrls: ["./activity-content.component.scss"],
})
export class ActivityContentComponent implements OnInit {
  @Input() content: any;

  constructor() {}

  ngOnInit(): void {}
}
