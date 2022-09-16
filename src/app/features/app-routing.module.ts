import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { UsSectionComponent } from "./pages/about/us-section/us-section.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { DetailComponent } from "../views/activities/detail/detail.component";
import { OrganizationComponent } from "./pages/organization/organization.component";

const routes: Routes = [
  {
    path: "contacto",
    component: ContactComponent
  },
  {
    path: "nosotros",
    component: UsSectionComponent
  },
  { 
    path: "actividades", 
    component: ActivityFormComponent
  },
  { 
    path: "testimonios", 
    component: TestimonialFormComponent
  },
  { 
    path: "actividades/:id", 
    component: DetailComponent

  },
  { 
    path: "backoffice/organization", 
    component: OrganizationComponent
  },
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "actividades",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
