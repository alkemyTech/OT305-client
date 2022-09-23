import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/models/categoria.models';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoriasEnLaApi!: Categoria[];

  cargando: boolean = true;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias(){
    this.httpService.get("https://ongapi.alkemy.org/api/categories", false)
      .subscribe((response: any) =>{
        this.cargando = false;
        this.categoriasEnLaApi = response.data;
      })
  }

  eliminarCategoria(_event: Categoria){
    //aqui se implementará la eliminación de la categoría seleccionada
  }

}
