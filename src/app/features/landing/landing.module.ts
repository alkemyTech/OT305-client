import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingComponent } from "./landing.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { LandingRoutingModule } from "./landing-routing.module";
import { JuguetesComponent } from "./juguetes/juguetes.component";
import { EscolarComponent } from "./escolar/escolar.component";
import { SliderComponent } from "./slider/slider.component";
import { HeaderCampanasComponent } from "./header-campanas/header-campanas.component";
import { ContenidoJuguetesComponent } from "./juguetes/contenido-juguetes/contenido-juguetes.component";
import { ContenidoEscolarComponent } from "./escolar/contenido-escolar/contenido-escolar.component";
import { WebPublicModule } from "../pages/web-public.module";

@NgModule({
  declarations: [
    LandingComponent,
    FooterComponent,
    JuguetesComponent,
    EscolarComponent,
    SliderComponent,
    HeaderCampanasComponent,
    ContenidoJuguetesComponent,
    ContenidoEscolarComponent,
  ],
  imports: [CommonModule, RouterModule, LandingRoutingModule, WebPublicModule],
})
export class LandingModule {}
