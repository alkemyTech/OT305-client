import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuardGuard } from "src/app/core/guards/adminGuard/admin-guard.guard";
import { ActivityFormComponent } from "../pages/activities/activity-form/activity-form.component";
import { CategoriesFormComponent } from "../pages/categories/categories-form/categories-form.component";
import { DashboardNovedadesComponent } from "../pages/news/dashboard-novedades/dashboard-novedades.component";
import { FormularioBusquedaNovedadesComponent } from "../pages/news/formulario-busqueda-novedades/formulario-busqueda-novedades.component";
import { NewsFormEditComponent } from "../pages/news/news-form-edit/news-form-edit.component";
import { NewsFormComponent } from "../pages/news/news-form/news-form.component";
import { OrganizationComponent } from "../pages/organization/organization.component";
import { TestimonialFormComponent } from "../pages/testimonials/testimonial-form/testimonial-form.component";
import { DashboardActivitiesComponent } from "./activities/dashboard-activities/dashboard-activities.component";
import { SearchActivitiesComponent } from "./activities/search-activities/search-activities.component";
import { AppBackofficeComponent } from "./app-backoffice.component";
import { CategorieSearchComponent } from "./categories/pages/categorie-search/categorie-search.component";
import { CategoriesCreateComponent } from "./categories/pages/categories-create/categories-create.component";
import { CategoriesEditComponent } from "./categories/pages/categories-edit/categories-edit.component";
import { CategoriesComponent } from "./categories/pages/categories/categories.component";
import { ScreenDashboardComponent } from "./Dashboard/screen-dashboard/screen-dashboard.component";
import { HomeComponent } from "./home/home.component";
import { DashboardMiembrosComponent } from "./members/components/dashboard-miembros/dashboard-miembros.component";
import { FormCrearEditarMiembrosComponent } from "./members/components/form-crear-editar-miembros/form-crear-editar-miembros.component";
import { EditComponent } from "./members/pages/edit/edit.component";
import { FormularioActualizacionDatosComponent } from "./Organizacion/formulario-actualizacion-datos/formulario-actualizacion-datos.component";
import { SlidesCreateComponent } from "./slides/pages/slides-create/slides-create.component";
import { SlidesEditComponent } from "./slides/pages/slides-edit/slides-edit.component";
import { SlidesComponent } from "./slides/pages/slides/slides.component";
import { DashboardComponent } from "./testimonials/dashboard/dashboard.component";
import { UsersCreateComponent } from "./users/pages/users-create/users-create.component";
import { UsersEditComponent } from "./users/pages/users-edit/users-edit.component";
import { UsersComponent } from "./users/pages/users/users.component";

const routes: Routes = [
  {
    path: "",
    component: AppBackofficeComponent,

    children: [
      {
        path: "users/edit",
        component: UsersEditComponent,
      },
      {
        path: "users/create",
        component: UsersCreateComponent,
      },
      {
        path: "users",
        component: UsersComponent,
      },
      {
        path: "categories/edit",
        component: CategoriesFormComponent,
      },
      {
        path: "dashboard/news",
        component: DashboardNovedadesComponent,
      },
      {
        path: "dashboard/news/create",
        component: NewsFormComponent,
      },
      {
        path: "dashboard/news/edit",
        component: NewsFormEditComponent,
      },
      {
        path: "categories/create",
        component: CategoriesFormComponent,
      },
      {
        path: "categories",
        component: CategoriesComponent,
      },
      {
        path: "slides/edit",
        component: SlidesEditComponent,
      },
      {
        path: "slides/create",
        component: SlidesCreateComponent,
      },
      {
        path: "slides",
        component: SlidesComponent,
      },
      {
        path: "activities/create",
        component: ActivityFormComponent,
      },
      {
        path: "dashboard",
        component: ScreenDashboardComponent,
      },
      {
        path: "organization/edit",
        component: FormularioActualizacionDatosComponent,
      },
      {
        path: "activities",
        component: DashboardActivitiesComponent,
      },
      {
        path: "activities/edit/:id",
        component: ActivityFormComponent,
      },
      {
        path: "news",
        component: NewsFormComponent,
      },
      {
        path: "members/edit",
        component: EditComponent,
      },
      {
        path: "dashboard/members/create",
        component: FormCrearEditarMiembrosComponent,
      },
      {
        path: "dashboard/members",
        component: DashboardMiembrosComponent,
      },
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "organization",
        component: OrganizationComponent,
      },
      {
        path: "testimonials",
        component: DashboardComponent,
      },
      {
        path: "testimonial/create",
        component: TestimonialFormComponent,
      },
      {
        path: "testimonials/edit/:id",
        component: TestimonialFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {}
