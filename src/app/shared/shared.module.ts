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

@NgModule({
  declarations: [
    SpinnerComponent,
    ProgressbarComponent,
    AlertasComponent,
    ResponseComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,    
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    ProgressbarComponent,
    AlertasComponent,
    SpinnerComponent,
    CardComponent,
  ],
})
export class SharedModule {}
