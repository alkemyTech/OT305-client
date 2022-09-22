import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Categoria } from 'src/app/core/models/categoria.models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() categorias!: Categoria[];

  @Output() categoriaParaEditar: EventEmitter<Categoria> = new EventEmitter();

  @Output() categoriaParaEliminar: EventEmitter<Categoria> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  capturarCategoriaParaEditar(categoria: Categoria){
    return this.categoriaParaEditar.emit(categoria);
  }

  capturarCategoriaParaEliminar(categoria: Categoria){
    return this.categoriaParaEliminar.emit(categoria);
  }

}
