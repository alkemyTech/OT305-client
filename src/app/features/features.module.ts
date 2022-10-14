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
import { NosotrosEffects } from "../core/ngrx/effects/nosotros.effect";
import { CategorieEffects } from "../core/ngrx/effects/categorie.effect";
import { SlideEffects } from "../core/ngrx/effects/slide.effect";
@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([
      ActividadEffects,
      NosotrosEffects,
      CategorieEffects,
      SlideEffects,
    ]),
    StoreDevtoolsModule.instrument({ name: "TEST" }),
    BrowserAnimationsModule,
  ],
})
export class FeaturesModule {}
