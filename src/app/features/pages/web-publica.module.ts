import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PublicWebRoutingModule } from "./web-publica-routing.module";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { PagesComponent } from './pages.component';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { SharedModule } from "src/app/shared/shared.module";
import { SpinnerInterceptor } from "src/app/shared/components/interceptors/spinner.interceptor";


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        PagesComponent,
    ],
    imports: [
      CommonModule,
      RouterModule,
      PublicWebRoutingModule,
      SharedModule,
    ],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    ],
  })
  
  export class PublicWebModule { }
  