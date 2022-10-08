import { Component, OnInit } from "@angular/core";
import { Categoria } from "src/app/core/models/categoria.models";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent implements OnInit {
  categorias: Categoria[] = [];
  cargando: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.cargando = false;
  }

  setCategories(value: Categoria[]) {
    this.categorias = value;
  }

  eliminarCategoria(_event: Categoria) {
    //aqui se implementará la eliminación de la categoría seleccionada
  }
}
