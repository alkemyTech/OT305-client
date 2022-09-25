import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/app/core/models/actividad.model';
import { Categoria } from 'src/app/core/models/categoria.models';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-dashboard-activities',
  templateUrl: './dashboard-activities.component.html',
  styleUrls: ['./dashboard-activities.component.scss']
})
export class DashboardActivitiesComponent   {
  title!:string;
  actividad!: any
  
  constructor() {
    this.title = "Dashboard Actividades"
    this.getActividad()
   }

   getActividad(){
    this.actividad = {
      id: 0,
      name: "Name",
      slug: "Slug",
      description: "Descripcion",
      image: "Image",
      user_id: 0,
      category_id: 0,
      created_at: "Create_At",
      updated_at: "Update_At",
      deleted_at: "Delete_At"
    }
  }
}

 


