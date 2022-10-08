import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { fromEvent, Observable, Subscription } from "rxjs";
import { debounceTime, map } from "rxjs/operators";
import { Categoria } from "src/app/core/models/categoria.models";
import { loadCategories } from "src/app/core/ngrx/actions/categorie.action";
import { selectListCategorie } from "src/app/core/ngrx/selectors/categorie.selector";
import { CategoriesService } from "src/app/core/services/categories/categories.service";

@Component({
  selector: "app-categorie-search",
  templateUrl: "./categorie-search.component.html",
  styleUrls: ["./categorie-search.component.scss"],
})
export class CategorieSearchComponent implements OnInit {
  @ViewChild("categorieSearchInput", { static: true })
  categorieSearchInput!: ElementRef;
  @Output() categories$ = new EventEmitter();
  public categories: Categoria[] = [];
  categorieSubscription!: Subscription;

  constructor(
    private categorieService: CategoriesService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.listOfMembers();
    this.categorieSubscription = fromEvent<Event>(
      this.categorieSearchInput.nativeElement,
      "keyup"
    )
      .pipe(
        map((event: Event) => {
          const searchCategorie = (event.target as HTMLInputElement).value;
          return searchCategorie;
        }),
        debounceTime(200)
      )
      .subscribe((data: any) => {
        if (data.length > 2) {
          this.categorieService.getCategorie(data).subscribe(
            (res: any) => {
              this.categories$.emit(res.data);
            },
            (error) => console.log(error.message)
          );
        } else this.listOfMembers();
      });
  }

  listOfMembers() {
    this.store.dispatch(loadCategories());
    this.store.select(selectListCategorie).subscribe((categorie: any) => {
      this.categories$.emit(categorie.data);
    });
  }

  ngOnDestroy(): void {
    this.categorieSubscription.unsubscribe();
  }
}
