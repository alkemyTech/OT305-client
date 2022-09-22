import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {
  NgModule
} from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { HttpService } from "./services/http.service";


@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, MatDialogModule],
  providers: [HttpService],
})
export class CoreModule {}
