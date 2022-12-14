import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsSectionComponent } from "./about/us-section/us-section.component";
import { DetailComponent } from "./activities/detail/detail.component";
import { ListActivitiesComponent } from "./activities/list-activities/list-activities.component";
import { LoginFormComponent } from "./auth/login-form/login-form.component";
import { RegisterFormComponent } from "./auth/register-form/register-form.component";
import { CategoriesFormComponent } from "./categories/categories-form/categories-form.component";
import { DatosContactoComponent } from "./contact/components/datos-contacto/datos-contacto.component";
import { ContactComponent } from "./contact/contact.component";
import { InicioComponent } from "./home/inicio/inicio.component";
import { DetalleNovedadComponent } from "./news/datail/detalle-novedad/detalle-novedad.component";
import { ListNewsComponent } from "./news/list-news/list-news.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TestimonialFormComponent } from "./testimonials/testimonial-form/testimonial-form.component";
import { UserFormComponent } from "./users/user-form/user-form.component";
import { WebPublicComponent } from "./web-public.component";
import { ErrorComponent } from "./error/error.component";
import { GuardsGuard } from "../../core/guards/guards.guard";
import { TokenGuard } from "src/app/core/guards/tokenGuard/token.guard";
import { DonacionComponent } from "./donations/donacion/donacion.component";
import { GraciasComponent } from "./donations/gracias/gracias.component";
import { NoAutenticadoGuard } from "src/app/core/guards/no-autenticado.guard";
import { UserRegularAutenticadoGuard } from "src/app/core/guards/user-regular-autenticado.guard";
import { ListTestimonialsComponent } from "./testimonials/list-testimonials/list-testimonials.component";
import { DetailsTestimonialComponent } from "./testimonials/details-testimonial/details-testimonial.component";
import { NewsFormComponent } from "./news/news-form/news-form.component";
import { NewsFormEditComponent } from "./news/news-form-edit/news-form-edit.component";
import { AdminGuardGuard } from "src/app/core/guards/adminGuard/admin-guard.guard";

const routes: Routes = [
  {
    path: "",
    component: WebPublicComponent,
    children: [
      {
        path: "actividades",
        component: ListActivitiesComponent,
      },

      {
        path: "actividades/:id",
        component: DetailComponent,
      },

      {
        path: "testimonios",
        component: ListTestimonialsComponent,
      },
      {
        path: "testimonios/create",
        component: TestimonialFormComponent,
      },
      {
        path: "testimonios/:id",
        component: DetailsTestimonialComponent,
      },

      {
        path: "categorias",
        component: CategoriesFormComponent,
      },

      {
        path: "proyectos",
        component: ProjectsComponent,
      },

      {
        path: "usuarios",
        component: UserFormComponent,
      },

      {
        path: "login",
        component: LoginFormComponent,
      },

      {
        path: "register",
        component: RegisterFormComponent,
        canLoad: [GuardsGuard],
        canActivate: [GuardsGuard, TokenGuard],
      },

      {
        path: "nosotros",
        component: UsSectionComponent,
      },

      {
        path: "contacto",
        component: ContactComponent,
        canLoad: [GuardsGuard],
        canActivate: [GuardsGuard],
      },

      {
        path: "novedades/:id",
        component: DetalleNovedadComponent,
        canLoad: [NoAutenticadoGuard],
        canActivate: [NoAutenticadoGuard],
      },

      {
        path: "novedades",
        component: ListNewsComponent,
        canLoad: [NoAutenticadoGuard],
        canActivate: [NoAutenticadoGuard],
      },
      {
        path: "novedades/create",
        component: NewsFormComponent,
      },
      {
        path: "novedades/edit",
        component: NewsFormEditComponent,
      },
      {
        path: "home",
        component: InicioComponent,
      },

      {
        path: "donar",
        component: DonacionComponent,
        canActivate: [AdminGuardGuard],
      },

      {
        path: "gracias",
        component: GraciasComponent,
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPublicRoutingModule {}
