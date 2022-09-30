import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/app/core/models/actividad.model';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.scss']
})
export class ListActivitiesComponent {
  actividades: Array<Actividad> = []

  constructor() { }

  setActividades(value: Actividad[]){
    this.actividades = value;
  }
}
