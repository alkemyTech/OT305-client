import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LandingRoutingModule } from './landing-routing.module';
import { JuguetesComponent } from './juguetes/juguetes.component';
import { EscolarComponent } from './escolar/escolar.component';



@NgModule({
  declarations: [
    LandingComponent,
    FooterComponent,
    JuguetesComponent,
    EscolarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LandingRoutingModule
  ]
})

export class LandingModule { }
