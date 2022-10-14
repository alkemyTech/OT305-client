import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { Slide } from "src/app/core/models/slide.model";
import { SlidesService } from "src/app/core/services/slides/slides.service";
import { AlertasComponent } from "src/app/shared/components/alertas/alertas.component";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent implements OnInit {
  slides: Slide[] = [];
  slides$!: Observable<Slide[]>;

  constructor(private slideService: SlidesService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.slides$ = this.slideService.getSlide();
  }
  openDialog(titulo: string, mensaje: string): void {
    const dialogRef = this.dialog.open(AlertasComponent, {
      data: {
        cancelText: "Cerrar",
        confirmText: "Ok",
        message: mensaje,
        title: titulo,
      },
    });
  }
}
