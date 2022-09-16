import { Component, OnInit } from "@angular/core";
import { SpinnerService } from "src/app/core/services/spinner.service";

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.scss"],
})
export class SpinnerComponent implements OnInit {
  loading$ = this.spinnerService.loading$;
  constructor(private readonly spinnerService: SpinnerService) {}

  ngOnInit(): void {}
}
