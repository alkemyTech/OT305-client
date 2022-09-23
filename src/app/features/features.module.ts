import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { MostrarTitulosComponent } from "../shared/components/mostrar-titulos/mostrar-titulos.component";
import { UsSectionComponent } from "./pages/about/us-section/us-section.component";
import { SobreNosotrosComponent } from "./pages/about/us-section/components/sobre-nosotros/sobre-nosotros.component";
import { CKEditorModule } from "ckeditor4-angular";
import { ContactFormComponent } from "./pages/contact/components/contact-form/contact-form.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ContributesInfoComponent } from "./pages/contact/components/contributes-info/contributes-info.component";
import { OrganizationComponent } from "./pages/organization/organization.component";
import { ListadoNosotrosComponent } from "./pages/about/us-section/components/listado-nosotros/listado-nosotros.component";
import { HeaderComponent } from "./backoffice/components/header/header.component";
import { HomeComponent } from "./backoffice/home/home.component";
import { FormEditarHomeComponent } from "./backoffice/home/components/form-editar-home/form-editar-home.component";
import { DetailComponent } from "./pages/activities/detail/detail.component";
import { StoreModule } from "@ngrx/store";
import { ROOT_REDUCERS } from "../core/ngrx/app.store";
import { EffectsModule } from "@ngrx/effects";
import { ActividadEffects } from "../core/ngrx/effects/actividad.effect";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { SearchActivitiesComponent } from "./backoffice/activities/search-activities/search-activities.component";
import { InicioComponent } from "./pages/home/inicio/inicio.component";
import { SliderComponent } from "./pages/home/slider/slider.component";
import { SharedModule } from "../shared/shared.module";
import { EditComponent } from "./backoffice/members/pages/edit/edit.component";
import { FormCrearEditarMiembrosComponent } from "./backoffice/members/components/form-crear-editar-miembros/form-crear-editar-miembros.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { DetalleNovedadComponent } from "./pages/news/datail/detalle-novedad/detalle-novedad.component";
import { ScreenDashboardComponent } from "./backoffice/Dashboard/screen-dashboard/screen-dashboard.component";
import { FormularioActualizacionDatosComponent } from "./backoffice/Organizacion/formulario-actualizacion-datos/formulario-actualizacion-datos.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ListActivitiesComponent } from "./pages/activities/list-activities/list-activities.component";
import { SidebarComponent } from "./backoffice/components/sidebar/sidebar.component";
import { SlidesComponent } from "./backoffice/slides/slides.component";
import { FormCreacionEdicionSlidesComponent } from "./backoffice/slides/components/form-creacion-edicion-slides/form-creacion-edicion-slides.component";
import { DashboardActivitiesComponent } from "./backoffice/activities/dashboard-activities/dashboard-activities.component";
<<<<<<< HEAD
import { DashboardMiembrosComponent } from "./backoffice/members/components/dashboard-miembros/dashboard-miembros.component";

=======
import { CategoriesComponent } from './backoffice/categories/pages/categories/categories.component';
import { CategoriesCreateComponent } from './backoffice/categories/pages/categories-create/categories-create.component';
import { TableComponent } from './backoffice/categories/pages/categories/components/table/table.component';
import { CategoriesEditComponent } from './backoffice/categories/pages/categories-edit/categories-edit.component';
>>>>>>> a0bd38a2bcf1691fc3a61a555ef822083120969c


@NgModule({
  declarations: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
    UsSectionComponent,
    SobreNosotrosComponent,
    MostrarTitulosComponent,
    ContactFormComponent,
    ContactComponent,
    ContributesInfoComponent,
    HeaderComponent,
    DetailComponent,
    HomeComponent,
    FormEditarHomeComponent,
    OrganizationComponent,
    ListadoNosotrosComponent,
    InicioComponent,
    SliderComponent,
    SearchActivitiesComponent,
    FormCrearEditarMiembrosComponent,
    DetalleNovedadComponent,
    ScreenDashboardComponent,
    EditComponent,
    ProjectsComponent,
    FormularioActualizacionDatosComponent,
    EditComponent,
    ProjectsComponent,
    ListActivitiesComponent,
    SidebarComponent,
    FormCreacionEdicionSlidesComponent,
    SlidesComponent,
    FormCreacionEdicionSlidesComponent,
    DashboardActivitiesComponent,
<<<<<<< HEAD
    DashboardMiembrosComponent,

=======
    CategoriesComponent,
    CategoriesCreateComponent,
    TableComponent,
    CategoriesEditComponent,
>>>>>>> a0bd38a2bcf1691fc3a61a555ef822083120969c


  ],
  exports: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
    HomeComponent,
    FormEditarHomeComponent,
    OrganizationComponent,
    HeaderComponent,
    EditComponent,
    ProjectsComponent,
    DetalleNovedadComponent,
    SlidesComponent,
    FormCreacionEdicionSlidesComponent,
    RouterModule,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
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
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([ActividadEffects]),
    StoreDevtoolsModule.instrument({ name: "TEST" }),
    BrowserAnimationsModule,
  ],
})
export class FeaturesModule {}
