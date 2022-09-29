import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { Component, NgModule } from "@angular/core";
import { componentFactoryName } from "@angular/compiler";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
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
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { DatosContactoComponent } from "./pages/contact/components/datos-contacto/datos-contacto.component";
import { ListNewsComponent } from "./pages/news/list-news/list-news.component";



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

    path: "contact",
    component: DatosContactoComponent
  },

  {
    path: "novedades",
    component: ListNewsComponent,
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
    path: "login",
    component: LoginFormComponent
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
    path: "newsForm",
    component: NewsFormComponent,
  },
  {
    path: "landing",
    loadChildren: () =>
      import("./landing/landing.module").then((m) => m.LandingModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },

  {
    path: "**",
    component: ErrorComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
