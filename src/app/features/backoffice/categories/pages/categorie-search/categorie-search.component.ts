import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { fromEvent, Observable } from "rxjs";
import { debounceTime, distinct, filter, map, switchMap } from "rxjs/operators";
import { Categoria } from "src/app/core/models/categoria.models";
import { CategoriesService } from "src/app/core/services/categories/categories.service";

@Component({
  selector: "app-categorie-search",
  templateUrl: "./categorie-search.component.html",
  styleUrls: ["./categorie-search.component.scss"],
})
export class CategorieSearchComponent implements OnInit {
  @ViewChild("categorieSearchInput", { static: true })
  categorieSearchInput!: ElementRef;
  categorie$!: Observable<Categoria[]>;
  listCategorie$!: Observable<Categoria[]>;
  public categories: Categoria[] = [];

  constructor(private categorieService: CategoriesService) {}

  ngOnInit(): void {
    this.categorie$ = fromEvent<Event>(
      this.categorieSearchInput.nativeElement,
      "keyup"
    ).pipe(
      map((event: Event) => {
        const searchCategorie = (event.target as HTMLInputElement).value;
        return searchCategorie;
      }),
      filter((searchTearm: string) => searchTearm.length > 2),
      debounceTime(500),
      distinct(),
      switchMap((searchCategorie: string) =>
        this.categorieService.getCategorie(searchCategorie)
      )
    );

    this.listCategorie$ = this.categorieService.listCategorie();
  }
}
