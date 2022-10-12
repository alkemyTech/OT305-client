import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpinnerComponent } from "./spinner/spinner.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ProgressbarComponent } from "./components/progressbar/progressbar.component";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { AlertasComponent } from "./components/alertas/alertas.component";
import { ResponseComponent } from "./components/alertas/response.component";
import { CardComponent } from "./components/card/card.component";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { LazyLoadImgComponent } from "./lazy-load-img/lazy-load-img.component";
@NgModule({
  declarations: [
    SpinnerComponent,
    ProgressbarComponent,
    AlertasComponent,
    ResponseComponent,
    CardComponent,
    LazyLoadImgComponent
  ],
  imports: [
    CommonModule,    
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatButtonModule,
    LazyLoadImageModule,
  
  ],
  exports: [
    ProgressbarComponent,
    AlertasComponent,
    SpinnerComponent,
    CardComponent,
    LazyLoadImageModule,
    LazyLoadImgComponent
  ],
})
export class SharedModule {}
