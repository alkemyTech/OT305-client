import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/models/categoria.models';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoriasEnLaApi!: Categoria[];

  cargando: boolean = true;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias(){
    this.categoriesService.listCategorie()
      .subscribe((response: any) =>{
        this.cargando = false;
        this.categoriasEnLaApi = response;
      })
  }

  eliminarCategoria(_event: Categoria){
    //aqui se implementará la eliminación de la categoría seleccionada
  }

}
