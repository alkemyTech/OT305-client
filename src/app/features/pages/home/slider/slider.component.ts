import { Component, OnInit } from "@angular/core";
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
  dialog: any;

  constructor(private slideService: SlidesService) {}

  ngOnInit(): void {
    this.slides$ = this.slideService.getSlide();
    this.slides$.subscribe((err) => {
      this.openDialog("error!", "Por favor rellena todos los campos");
    });
  }
  openDialog(titulo: string, mensaje: string): void {
    const dialogRef = this.dialog.open(AlertasComponent, {
      width: "350px",
      data: {
        cancelText: "Cerrar",
        confirmText: "Ok",
        message: mensaje,
        title: titulo,
      },
    });
  }
}
