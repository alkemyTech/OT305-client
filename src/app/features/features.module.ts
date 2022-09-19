import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSidenavModule } from "@angular/material/sidenav";
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
import { HeaderComponent } from "./backoffice/components/header/header.component";
import { HomeComponent } from "./backoffice/home/home.component";
import { FormEditarHomeComponent } from "./backoffice/home/components/form-editar-home/form-editar-home.component";
import { DetailComponent } from "./pages/activities/detail/detail.component";
import { OrganizationComponent } from "./pages/organization/organization.component";
import { InicioComponent } from "./pages/home/inicio/inicio.component";
import { SliderComponent } from "./pages/home/slider/slider.component";
import { SearchActivitiesComponent } from "./backoffice/activities/search-activities/search-activities.component";
import { SharedModule } from "../shared/shared.module";
import { FormularioSubscripcionComponent } from "../shared/components/newsletter/formulario-subscripcion/formulario-subscripcion.component";
import { DetalleNovedadComponent } from "./pages/news/datail/detalle-novedad/detalle-novedad.component";
import { ScreenDashboardComponent } from "./backoffice/Dashboard/screen-dashboard/screen-dashboard.component";


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
    InicioComponent,
    SliderComponent,
    SearchActivitiesComponent,
    FormularioSubscripcionComponent,
    DetalleNovedadComponent,
    ScreenDashboardComponent,



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
    RouterModule,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
 
  ],
})
export class FeaturesModule {}
