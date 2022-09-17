import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpinnerComponent } from "./spinner/spinner.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [SpinnerComponent, ProgressbarComponent],
  imports: [CommonModule, MatProgressSpinnerModule,MatProgressBarModule],
  exports: [ProgressbarComponent]
})
export class SharedModule {}
