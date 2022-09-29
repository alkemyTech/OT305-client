import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { CKEditorModule } from "ckeditor4-angular";
import { SharedModule } from "src/app/shared/shared.module";
import { NgxPaginationModule } from 'ngx-pagination';
import { BackofficeRoutingModule } from "./backoffice-routing.module";
import { DashboardActivitiesComponent } from "./activities/dashboard-activities/dashboard-activities.component";
import { SearchActivitiesComponent } from "./activities/search-activities/search-activities.component";
import { CategoriesFormComponent } from "../pages/categories/categories-form/categories-form.component";
import { CategoriesComponent } from "./categories/pages/categories/categories.component";
import { TableComponent } from "./categories/pages/categories/components/table/table.component";
import { CategoriesCreateComponent } from "./categories/pages/categories-create/categories-create.component";
import { CategoriesEditComponent } from "./categories/pages/categories-edit/categories-edit.component";
import { HeaderComponent } from "./components/header/header.component";
import { ScreenDashboardComponent } from "./Dashboard/screen-dashboard/screen-dashboard.component";
import { HomeComponent } from "./home/home.component";
import { FormEditarHomeComponent } from "./home/components/form-editar-home/form-editar-home.component";
import { FormCrearEditarMiembrosComponent } from "./members/components/form-crear-editar-miembros/form-crear-editar-miembros.component";
import { EditComponent } from "./members/pages/edit/edit.component";
import { FormularioActualizacionDatosComponent } from "./Organizacion/formulario-actualizacion-datos/formulario-actualizacion-datos.component";
import { FormCreacionEdicionSlidesComponent } from "./slides/components/form-creacion-edicion-slides/form-creacion-edicion-slides.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { AppBackofficeComponent } from "./app-backoffice.component";
import { DashboardMiembrosComponent } from "./members/components/dashboard-miembros/dashboard-miembros.component";
import { SlidesCreateComponent } from "./slides/pages/slides-create/slides-create.component";
import { SlidesEditComponent } from "./slides/pages/slides-edit/slides-edit.component";
import { SlidesComponent } from "./slides/pages/slides/slides.component";
import { TableSlidesComponent } from "./slides/components/table-slides/table-slides.component";
import { UsersComponent } from './users/pages/users/users.component';
import { UsersCreateComponent } from './users/pages/users-create/users-create.component';
import { UsersEditComponent } from './users/pages/users-edit/users-edit.component';
import { TableUsersComponent } from './users/pages/users/components/table-users/table-users.component';
import { FormSearchSlidesComponent } from './slides/components/form-search-slides/form-search-slides.component';
import { SlidesSearchComponent } from './slides/pages/slides-search/slides-search.component';

@NgModule({
  declarations: [
    AppBackofficeComponent,
    DashboardActivitiesComponent,
    SearchActivitiesComponent,
    CategoriesFormComponent,
    CategoriesComponent,
    TableComponent,
    CategoriesCreateComponent,
    CategoriesEditComponent,
    HeaderComponent,
    SidebarComponent,
    ScreenDashboardComponent,
    HomeComponent,
    FormEditarHomeComponent,
    FormCrearEditarMiembrosComponent,
    EditComponent,
    FormularioActualizacionDatosComponent,
    SlidesComponent,
    FormCreacionEdicionSlidesComponent,
    DashboardMiembrosComponent,
    SlidesEditComponent,
    SlidesCreateComponent,
    TableSlidesComponent,
    UsersComponent,
    UsersCreateComponent,
    UsersEditComponent,
    TableUsersComponent,
    FormSearchSlidesComponent,
    SlidesSearchComponent,
  ],
  exports: [
    CategoriesFormComponent,
    HeaderComponent,
    HomeComponent,
    FormEditarHomeComponent,
    EditComponent,
    SlidesComponent,
    FormCreacionEdicionSlidesComponent,
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    CKEditorModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    SharedModule,
    NgxPaginationModule

  ],
})
export class BackofficeModule {}
