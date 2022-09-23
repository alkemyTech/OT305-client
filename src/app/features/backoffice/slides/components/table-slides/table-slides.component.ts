import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/core/models/categoria.models';

@Component({
  selector: 'app-table-slides',
  templateUrl: './table-slides.component.html',
  styleUrls: ['./table-slides.component.scss']
})
export class TableSlidesComponent implements OnInit {
  @Input() slides!: any[];

  @Output() slideParaEditar: EventEmitter<any> = new EventEmitter();

  @Output() slideParaEliminar: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  capturarSlideParaEditar(slide: any){
    return this.slideParaEditar.emit(slide);
  }

  capturarSlideParaEliminar(slide: any){
    return this.slideParaEliminar.emit(slide);
  }

}
