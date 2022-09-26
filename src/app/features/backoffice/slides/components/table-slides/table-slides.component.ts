import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SlidesService } from 'src/app/core/services/slides/slides.service';

@Component({
  selector: 'app-table-slides',
  templateUrl: './table-slides.component.html',
  styleUrls: ['./table-slides.component.scss']
})
export class TableSlidesComponent implements OnInit {
  @Input() slides!: any[];

  @Output() slideParaEliminar: EventEmitter<any> = new EventEmitter();
  
  constructor(private slideService: SlidesService) { }

  ngOnInit(): void {
  }

  capturarSlideParaEditar(slide: any){
    return this.slideService.setSlideParaEditar(slide);
  }

  capturarSlideParaEliminar(slide: any){
    return this.slideParaEliminar.emit(slide);
  }

}
