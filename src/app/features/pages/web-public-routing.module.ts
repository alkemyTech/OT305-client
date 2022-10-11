import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsSectionComponent } from './about/us-section/us-section.component';
import { DetailComponent } from './activities/detail/detail.component';
import { ListActivitiesComponent } from './activities/list-activities/list-activities.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { DatosContactoComponent } from './contact/components/datos-contacto/datos-contacto.component';
import { ContactComponent } from './contact/contact.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { DetalleNovedadComponent } from './news/datail/detalle-novedad/detalle-novedad.component';
import { ListNewsComponent } from './news/list-news/list-news.component';
import { ProjectsComponent } from './projects/projects.component';
import { TestimonialFormComponent } from './testimonials/testimonial-form/testimonial-form.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { WebPublicComponent } from './web-public.component';
import { ErrorComponent } from "./error/error.component";
import { GuardsGuard } from '../../core/guards/guards.guard';
import { DonacionComponent } from './donations/donacion/donacion.component';
import { GraciasComponent } from './donations/gracias/gracias.component';
import { NoAutenticadoGuard } from 'src/app/core/guards/no-autenticado.guard';

const routes: Routes = [
  {
    path: "",
    component: WebPublicComponent,
    children: [

      {
        path: "actividades",
        component: ListActivitiesComponent
      },

      {
        path: "actividades/:id",
        component: DetailComponent
      },

      {
        path: "testimonios",
        component: TestimonialFormComponent
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
        component: LoginFormComponent
      },

      {
        path: "register",
        component: RegisterFormComponent,
        canLoad: [ GuardsGuard ],
        canActivate: [ GuardsGuard ]
      },

      {
        path: "nosotros",
        component: UsSectionComponent,
      },

      {
        path: "contacto",
        component: ContactComponent,
        canLoad: [ GuardsGuard ],
        canActivate: [ GuardsGuard ]
      },
      
      {
        path: "contact",
        component: DatosContactoComponent
      },

      {
        path: "novedades/:id",
        component: DetalleNovedadComponent,
        canLoad: [ NoAutenticadoGuard ],
        canActivate: [ NoAutenticadoGuard ]
      },

      {
        path: "novedades",
        component: ListNewsComponent,
        canLoad: [ NoAutenticadoGuard ],
        canActivate: [ NoAutenticadoGuard ]
      },

      {
        path: "home",
        component: InicioComponent
      },

      {
        path: "donar",
        component: DonacionComponent,
      },

      {
        path: "gracias",
        component: GraciasComponent,
      },

      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },

      {
        path: "**",
        component: ErrorComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebPublicRoutingModule { }
