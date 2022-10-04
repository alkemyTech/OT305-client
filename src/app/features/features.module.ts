import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { StoreModule } from "@ngrx/store";
import { ROOT_REDUCERS } from "../core/ngrx/app.store";
import { EffectsModule } from "@ngrx/effects";
import { ActividadEffects } from "../core/ngrx/effects/actividad.effect";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [ 

  ],
  exports: [
    RouterModule,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([ActividadEffects]),
    StoreDevtoolsModule.instrument({ name: "TEST" }),
    BrowserAnimationsModule,
  ],
})
export class FeaturesModule {}
