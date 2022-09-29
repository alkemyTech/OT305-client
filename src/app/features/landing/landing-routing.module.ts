import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { JuguetesComponent } from "./juguetes/juguetes.component";
import { LandingComponent } from "./landing.component";

const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
    children: [
      { path: 'juguetes', component: JuguetesComponent},
      { path: 'materiales', component: LandingComponent}
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LandingRoutingModule {}
