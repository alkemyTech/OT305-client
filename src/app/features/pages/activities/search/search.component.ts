import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { fromEvent, Subject } from "rxjs";
import { debounceTime, map, takeUntil } from "rxjs/operators";
import { Actividad } from "src/app/core/models/actividad.model";
import { Get_Actividad } from "src/app/core/ngrx/actions/actividad.action";
import { AppStore } from "src/app/core/ngrx/app.store";
import { selectActividadFeature, selectActividadList } from "src/app/core/ngrx/selectors/actividad.selector";
import { ActividadService } from "src/app/core/services/activities/actividad.service";
import { AlertasComponent } from "src/app/shared/components/alertas/alertas.component";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() actividades$ = new EventEmitter<Actividad[]>();
  private desub$ = new Subject<void>();
  actividades: Array<Actividad> = [];

  constructor(
    private store: Store<AppStore>,
    private actividadService: ActividadService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.obtenerActividades();
    const buscador = document.getElementById("buscador")!;
    const keyup = fromEvent(buscador, "keyup");

    keyup
      .pipe(
        map((e: any) => e.currentTarget.value),
        debounceTime(500),
        takeUntil(this.desub$)
      )
      .subscribe((data) => {
        if (data.length > 2) {
          this.actividadService.searchActivities(data).pipe(takeUntil(this.desub$))
            .subscribe(
              (results: any) => {
                this.actividades = results.data;
                this.EmitirResultados();
              },
              (error) => {
                this.openDialog("La búsqueda no pudo realizarse correctamente", error.message)
              }
            );
        } else this.obtenerActividades();
      },
      (error) => {
        this.openDialog("Error", error.message)
      });
  }

  obtenerActividades() {
    this.store.dispatch(Get_Actividad());
    this.store
      .select(selectActividadFeature)
      .pipe(takeUntil(this.desub$))
      .subscribe((state: any) => {
        if (state.error == undefined) {
          this.actividades = state.actividad.data;
          this.EmitirResultados();
        }
        else this.openDialog("Error al obtener las Actividades", state.error.message)
      },
      (error) => {
        this.openDialog("Error al obtener las Actividades", error.message)
      });
  }

  EmitirResultados() {
    this.actividades$.emit(this.actividades);
  }

  ngOnDestroy(): void {
    this.desub$.next();
    this.desub$.complete();
  }

  openDialog(titulo: string, mensaje: string): void {
    const dialogRef = this.dialog.open(AlertasComponent, {
      width: "355px",
      data: {
        cancelText: "Cerrar",
        confirmText: "Ok",
        message: mensaje,
        title: titulo,
      },
    });
  }
}
