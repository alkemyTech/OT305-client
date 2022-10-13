import { NgModule } from "@angular/core";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { RouterModule } from "@angular/router";

import { WebPublicRoutingModule } from "./web-public-routing.module";
import { WebPublicComponent } from "./web-public.component";
import { PhonePipe } from "src/app/core/pipes/phone/phone.pipe";
import { MostrarTitulosComponent } from "src/app/shared/components/mostrar-titulos/mostrar-titulos.component";
import { SliderComponent as SliderPublicComponent } from "./home/slider/slider.component";
import { ListadoNosotrosComponent } from "./about/us-section/components/listado-nosotros/listado-nosotros.component";
import { SobreNosotrosComponent } from "./about/us-section/components/sobre-nosotros/sobre-nosotros.component";
import { UsSectionComponent } from "./about/us-section/us-section.component";
import { ActivityContentComponent } from "./activities/activity-content/activity-content.component";
import { ActivityFormComponent } from "./activities/activity-form/activity-form.component";
import { DetailComponent } from "./activities/detail/detail.component";
import { ListActivitiesComponent } from "./activities/list-activities/list-activities.component";
import { SearchComponent } from "./activities/search/search.component";
import { LoginFormComponent } from "./auth/login-form/login-form.component";
import { RegisterFormComponent } from "./auth/register-form/register-form.component";
import { ContactFormComponent } from "./contact/components/contact-form/contact-form.component";
import { ContributesInfoComponent } from "./contact/components/contributes-info/contributes-info.component";
import { DatosContactoComponent } from "./contact/components/datos-contacto/datos-contacto.component";
import { ContactComponent } from "./contact/contact.component";
import { ErrorComponent } from "./error/error.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { InicioComponent } from "./home/inicio/inicio.component";
import { DetalleNovedadComponent } from "./news/datail/detalle-novedad/detalle-novedad.component";
import { ListNewsComponent } from "./news/list-news/list-news.component";
import { OrganizationComponent } from "./organization/organization.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SlidesFormComponent } from "./slides/slides-form/slides-form.component";
import { TestimonialFormComponent } from "./testimonials/testimonial-form/testimonial-form.component";
import { UserFormComponent } from "./users/user-form/user-form.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CKEditorModule } from "ckeditor4-angular";
import { SharedModule } from "src/app/shared/shared.module";
import { FormularioBusquedaNovedadesWebPublicaComponent } from "./news/formulario-busqueda-novedades-web-publica/formulario-busqueda-novedades-web-publica.component";
import { NgxTwitterTimelineModule } from "ngx-twitter-timeline";
import { DonacionComponent } from "./donations/donacion/donacion.component";
import { GraciasComponent } from "./donations/gracias/gracias.component";
import { PdfViewerModule } from "ng2-pdf-viewer";

@NgModule({
  declarations: [
    WebPublicComponent,
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
    UsSectionComponent,
    SobreNosotrosComponent,
    MostrarTitulosComponent,
    ContactFormComponent,
    ContactComponent,
    ContributesInfoComponent,
    DetailComponent,
    OrganizationComponent,
    ListadoNosotrosComponent,
    InicioComponent,
    SliderPublicComponent,
    DetalleNovedadComponent,
    ProjectsComponent,
    ProjectsComponent,
    ListActivitiesComponent,
    ErrorComponent,
    ActivityContentComponent,
    DatosContactoComponent,
    PhonePipe,
    ListNewsComponent,
    FooterComponent,
    SearchComponent,
    HeaderComponent,
    FormularioBusquedaNovedadesWebPublicaComponent,
    DonacionComponent,
    GraciasComponent,
  ],
  exports: [
    WebPublicComponent,
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    SlidesFormComponent,
    TestimonialFormComponent,
    UserFormComponent,
    OrganizationComponent,
    ProjectsComponent,
    DetalleNovedadComponent,
    RouterModule,
    ListNewsComponent,
    FormularioBusquedaNovedadesWebPublicaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    WebPublicRoutingModule,
    ReactiveFormsModule,
    CKEditorModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    SharedModule,
    NgxTwitterTimelineModule,
    PdfViewerModule,
  ],
  providers: [CurrencyPipe],
})
export class WebPublicModule {}
