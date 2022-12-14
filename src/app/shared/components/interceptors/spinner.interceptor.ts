import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { SpinnerService } from "src/app/core/services/spinner.service";
import { finalize } from "rxjs/operators";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    return next.handle(req).pipe(finalize(() => this.spinnerService.hide()));
  }
}
