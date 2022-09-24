import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ActividadService } from "src/app/core/services/activities/actividad.service";
import { AlertasComponent } from "src/app/shared/components/alertas/alertas.component";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnDestroy {
  private desub$ = new Subject<void>();
  actividad: any;
  mode: boolean = true;
  id: number;

  constructor(
    private aRoute: ActivatedRoute,
    private actividadService: ActividadService,
    public dialog: MatDialog
  ) {
    this.id = this.aRoute.snapshot.params["id"];
    this.actividadService.getActivityById(this.id).pipe(takeUntil(this.desub$))
    .subscribe(
      ({data}) => {
        this.actividad = data;
      },
      (error) => this.openDialog('Error al Obtener Actividad', error.message)
    );
    this.mode = false;
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

  ngOnDestroy(): void {
    this.desub$.next();
    this.desub$.complete();
  }
}
