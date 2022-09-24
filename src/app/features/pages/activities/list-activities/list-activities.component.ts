import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actividad } from 'src/app/core/models/actividad.model';
import { Get_Actividad } from 'src/app/core/ngrx/actions/actividad.action';
import { AppStore } from 'src/app/core/ngrx/app.store';
import { selectActividadList } from 'src/app/core/ngrx/selectors/actividad.selector';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.scss']
})
export class ListActivitiesComponent implements OnInit {
  actividades: Array<any> = []

  constructor(private store: Store<AppStore>) { }

  ngOnInit(): void {
    this.store.dispatch(Get_Actividad());
    this.store.select(selectActividadList).subscribe((actividad: any) => {
      this.actividades = actividad.data
    });
  }

}
