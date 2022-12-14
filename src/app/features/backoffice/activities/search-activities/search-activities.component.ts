import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { fromEvent, Subject } from "rxjs";
import { debounceTime, map, takeUntil } from "rxjs/operators";
import { Actividad } from "src/app/core/models/actividad.model";
import { Get_Actividad } from "src/app/core/ngrx/actions/actividad.action";
import { AppStore } from "src/app/core/ngrx/app.store";
import { selectActividadList } from "src/app/core/ngrx/selectors/actividad.selector";
import { ActividadService } from "src/app/core/services/activities/actividad.service";

@Component({
  selector: "app-search-activities",
  templateUrl: "./search-activities.component.html",
  styleUrls: ["./search-activities.component.scss"],
})
export class SearchActivitiesComponent implements OnInit, OnDestroy {
  @Output() actividades$ = new EventEmitter<Actividad[]>();
  private desub$ = new Subject<void>();

  constructor(private store: Store<AppStore>, private actividadService: ActividadService) {}

  ngOnInit(): void {
    this.obtenerActividades();
    const buscador = document.getElementById("buscador")!;
    const keyup = fromEvent(buscador, "keyup");

    keyup
      .pipe(
        map((e: any) => e.currentTarget.value),
        debounceTime(100),
        takeUntil(this.desub$)
      )
      .subscribe((data) => {
        if (data.length > 2) {
          this.actividadService.searchActivities(data).pipe(takeUntil(this.desub$))
            .subscribe(
              (results: any) => {
                this.actividades$.emit(results.data);
              },
              (error) => console.log(error.message)
            );
        } else this.obtenerActividades();
      });
  }

  obtenerActividades() {
    this.store.dispatch(Get_Actividad());
    this.store
      .select(selectActividadList)
      .pipe(takeUntil(this.desub$))
      .subscribe((actividad: any) => {
        this.actividades$.emit(actividad.data);
      });
  }

  ngOnDestroy(): void {
    this.desub$.next();
    this.desub$.complete();
  }
}
