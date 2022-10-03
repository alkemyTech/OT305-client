import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsSectionComponent } from "./about/us-section/us-section.component";
import { DetailComponent } from "./activities/detail/detail.component";
import { ListActivitiesComponent } from "./activities/list-activities/list-activities.component";
import { LoginFormComponent } from "./auth/login-form/login-form.component";
import { RegisterFormComponent } from "./auth/register-form/register-form.component";
import { ContactComponent } from "./contact/contact.component";
import { InicioComponent } from "./home/inicio/inicio.component";
import { DetalleNovedadComponent } from "./news/datail/detalle-novedad/detalle-novedad.component";
import { ListNewsComponent } from "./news/list-news/list-news.component";
import { PagesComponent } from "./pages.component";
import { TestimonialFormComponent } from "./testimonials/testimonial-form/testimonial-form.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "home",
        component: InicioComponent,
      },
      {
        path: "contacto",
        component: ContactComponent,
      },
      {
        path: "nosotros",
        component: UsSectionComponent,
      },
      {
        path: "novedades",
        component: ListNewsComponent,
      },
      {
        path: "novedades/:id",
        component: DetalleNovedadComponent,
      },
      {
        path: "actividades",
        component: ListActivitiesComponent,
      }, 
      {
        path: "actividades/:id",
        component: DetailComponent,
      },   
      {
        path: "testimonios",
        component: TestimonialFormComponent,
      },
      {
        path: "login",
        component: LoginFormComponent
      },
      {
        path: "register",
        component: RegisterFormComponent,
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PublicWebRoutingModule {}
