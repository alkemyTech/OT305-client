import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {
  NgModule
} from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { StoreModule } from "@ngrx/store";
import { ROOT_REDUCERS } from "./ngrx/app.store";
import { HttpService } from "./services/http.service";


@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, MatDialogModule, StoreModule.forRoot(ROOT_REDUCERS)],
  providers: [HttpService],
})
export class CoreModule {}
