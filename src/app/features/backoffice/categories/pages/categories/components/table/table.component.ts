import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() categorias!: any[];

  @Output() categoriaParaEditar: EventEmitter<any> = new EventEmitter();

  @Output() categoriaParaEliminar: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  capturarCategoriaParaEditar(categoria: any){
    return this.categoriaParaEditar.emit(categoria);
  }

  capturarCategoriaParaEliminar(categoria: any){
    return this.categoriaParaEliminar.emit(categoria);
  }

}
