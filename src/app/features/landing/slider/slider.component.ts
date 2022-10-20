import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent implements OnInit {
  @Input() slider1!: string;
  @Input() slider2!: string;
  @Input() slider3!: string;

  @Input() mensaje1!: string;
  @Input() mensaje2!: string;
  @Input() mensaje3!: string;
  constructor() {}

  ngOnInit(): void {}
}
