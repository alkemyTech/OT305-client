import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LandingRoutingModule } from './landing-routing.module';
import { JuguetesComponent } from './juguetes/juguetes.component';
import { EscolarComponent } from './escolar/escolar.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderCampanasComponent } from './header-campanas/header-campanas.component';
import { ContenidoEscolarComponent } from './escolar/contenido-escolar/contenido-escolar.component';
// import { AngularCountdownDateTimeModule } from 'angular-countdown-date-time';




@NgModule({
  declarations: [
    LandingComponent,
    FooterComponent,
    JuguetesComponent,
    EscolarComponent,
    SliderComponent,
    HeaderCampanasComponent,
   ContenidoEscolarComponent,
   

  ],
  imports: [
    CommonModule,
    RouterModule,
    LandingRoutingModule,

   
   
  
  ]
})

export class LandingModule { }
