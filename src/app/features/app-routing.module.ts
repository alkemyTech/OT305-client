import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ErrorComponent } from "./pages/error/error.component";
import { DatosContactoComponent } from "./pages/contact/components/datos-contacto/datos-contacto.component";



const routes: Routes = [
  {
    path: "backoffice",
    loadChildren: () =>
      import("./backoffice/backoffice.module").then((m) => m.BackofficeModule),
  },
  {

    path: "contact",
    component: DatosContactoComponent
  },
  {
    path: "usuarios",
    component: UserFormComponent,
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
    path: "landing",
    loadChildren: () =>
      import("./landing/landing.module").then((m) => m.LandingModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./pages/web-publica.module").then((m) => m.PublicWebModule),
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
