import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivityFormComponent } from "../pages/activities/activity-form/activity-form.component";
import { NewsFormComponent } from "../pages/news/news-form/news-form.component";
import { OrganizationComponent } from "../pages/organization/organization.component";
import { DashboardActivitiesComponent } from "./activities/dashboard-activities/dashboard-activities.component";
import { SearchActivitiesComponent } from "./activities/search-activities/search-activities.component";
import { AppBackofficeComponent } from "./app-backoffice.component";
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


const routes: Routes = [
  {
    path: "",
    component: AppBackofficeComponent,
    children: [
      {
        path: "categories/edit",
        component: CategoriesEditComponent,
      },
      {
        path: "categories/create",
        component: CategoriesCreateComponent,
      },
      {
        path: "categories",
        component: CategoriesComponent,
      },
      {
        path: "slides/edit",
        component: SlidesEditComponent
      },
      {
        path: "slides/create",
        component: SlidesCreateComponent
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
        path: "news",
        component: NewsFormComponent,
      },
      {
        path: "members/edit",
        component: EditComponent,
      },
      {
        path: "backoffice/members/create",
        component: FormCrearEditarMiembrosComponent,
      },
      {
        path: "backoffice/members",
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
        path: "search/actividades",
        component: SearchActivitiesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {}
