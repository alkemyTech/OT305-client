import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { Component, NgModule } from "@angular/core";
import { componentFactoryName } from "@angular/compiler";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { UsSectionComponent } from "./pages/about/us-section/us-section.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { DetailComponent } from "./pages/activities/detail/detail.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { InicioComponent } from "./pages/home/inicio/inicio.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { DetalleNovedadComponent } from "./pages/news/datail/detalle-novedad/detalle-novedad.component";
import { ListActivitiesComponent } from "./pages/activities/list-activities/list-activities.component";
import { ErrorComponent } from "./pages/error/error.component";

const routes: Routes = [
  {
    path: "backoffice",
    loadChildren: () =>
      import("./backoffice/backoffice.module").then((m) => m.BackofficeModule),
  },
  {
    path: "novedades/:id",
    component: DetalleNovedadComponent,
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
  },
  {
    path: "proyectos",
    component: ProjectsComponent,
  },

  {
    path: "categorias",
    component: CategoriesFormComponent,
  },

  {
    path: "testimonios",
    component: TestimonialFormComponent,
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
    path: "home",
    component: InicioComponent,
  },
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },

  {
    path: "**",
    component: ErrorComponent
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
