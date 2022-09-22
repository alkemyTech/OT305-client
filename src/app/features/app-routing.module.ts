import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { UsSectionComponent } from "./pages/about/us-section/us-section.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { DetailComponent } from "./pages/activities/detail/detail.component";
import { HomeComponent } from "./backoffice/home/home.component";
import { OrganizationComponent } from "./pages/organization/organization.component";
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { InicioComponent } from "./pages/home/inicio/inicio.component"; 
import { SearchActivitiesComponent } from "./backoffice/activities/search-activities/search-activities.component";
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { DetalleNovedadComponent } from "./pages/news/datail/detalle-novedad/detalle-novedad.component";
import { ScreenDashboardComponent } from "./backoffice/Dashboard/screen-dashboard/screen-dashboard.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { EditComponent } from "./backoffice/members/pages/edit/edit.component";
import { FormularioActualizacionDatosComponent } from "./backoffice/Organizacion/formulario-actualizacion-datos/formulario-actualizacion-datos.component";





const routes: Routes = [
  {

    path:"backoffice",
    component: ScreenDashboardComponent
  },
  {
    path: "backoffice/organization/edit",
    component: FormularioActualizacionDatosComponent
  },

  {
    path: "backoffice/news",
    component: NewsFormComponent
  }, 
  {


    path: "novedades/:id",
    component: DetalleNovedadComponent
  },
  {
    path: "backoffice/members/edit",
    component: EditComponent
  }
  ,
  {
    path: "backoffice/home",
    component: HomeComponent,
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
    path: "usuarios",
    component: UserFormComponent,
  },
  {
    path: "register",
    component: RegisterFormComponent,
  { 
    path: "proyectos", 
    component: ProjectsComponent
  },
  {
    path: "categorias", 
    component: CategoriesFormComponent
  },
  {
    path: "testimonios",
    component: TestimonialFormComponent,
  },
  {
    path: "actividades/:id",
    component: DetailComponent,
  },
  {
    path: "backoffice/organization",
    component: OrganizationComponent,
  },
  {
    path: "home",
    component: InicioComponent,
  },
  {
    path: "backoffice/search/actividades",
    component: SearchActivitiesComponent,
  },
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "actividades",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
