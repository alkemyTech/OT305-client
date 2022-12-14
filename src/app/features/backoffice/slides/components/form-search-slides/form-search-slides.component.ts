import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { debounceTime, switchMap } from "rxjs/operators";
import { Slide } from "src/app/core/models/slide.model";
import { loadSlides } from "src/app/core/ngrx/actions/slide.action";
import { selectListSlide } from "src/app/core/ngrx/selectors/slide.selector";
import { HttpService } from "src/app/core/services/http.service";

@Component({
  selector: "app-form-search-slides",
  templateUrl: "./form-search-slides.component.html",
  styleUrls: ["./form-search-slides.component.scss"],
})
export class FormSearchSlidesComponent implements OnInit, OnDestroy {
  @Output() slideBuscado = new EventEmitter();

  slidesObtenidosDeApi: Slide[] = [];

  subject$ = new Subject();

  textoSolicitado!: string;

  constructor(private httpService: HttpService, private store: Store<any>) {}

  ngOnInit(): void {
    this.obtenerSlidesDeApi();

    this.subject$
      .pipe(
        debounceTime(500),
        switchMap((data) =>
          this.httpService.get(
            `https://ongapi.alkemy.org/api/slides?search=${this.textoSolicitado}`,
            false
          )
        )
      )
      .subscribe((res: any) => {
        return this.slideBuscado.emit(res.data);
      });
  }

  ngOnDestroy(): void {
    this.subject$.unsubscribe();
  }

  obtenerSlidesDeApi() {
    this.store.dispatch(loadSlides());
    this.store.select(selectListSlide).subscribe((res: any) => {
      this.slidesObtenidosDeApi = res.data;
      this.slideBuscado.emit(this.slidesObtenidosDeApi);
    });
  }

  searchSlide(texto: string) {
    if (texto.length >= 3) {
      this.textoSolicitado = texto;
      this.subject$.next(texto);
    } else {
      this.slideBuscado.emit(this.slidesObtenidosDeApi);
    }
  }
}
