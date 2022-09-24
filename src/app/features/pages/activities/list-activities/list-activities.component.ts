import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Actividad } from 'src/app/core/models/actividad.model';
import { Get_Actividad } from 'src/app/core/ngrx/actions/actividad.action';
import { AppStore } from 'src/app/core/ngrx/app.store';
import { selectActividadList, selectLoading } from 'src/app/core/ngrx/selectors/actividad.selector';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.scss']
})
export class ListActivitiesComponent implements OnInit {
  private desub$ = new Subject<void>();
  actividades: Array<any> = []
  mode: boolean = true;

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.store.dispatch(Get_Actividad());
    this.store.select(selectActividadList).pipe(takeUntil(this.desub$))
    .subscribe((actividad: any) => {
      this.actividades = actividad.data
    });
    this.store.select(selectLoading).pipe(takeUntil(this.desub$))
    .subscribe((data) => {
      this.mode = data;
    })
  }

  ngOnDestroy(): void {
    this.desub$.next();
    this.desub$.complete();
  }
}
