import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Slide } from 'src/app/core/models/slide.model';
import { SlidesService } from 'src/app/core/services/slides/slides.service';

@Component({
  selector: 'app-table-slides',
  templateUrl: './table-slides.component.html',
  styleUrls: ['./table-slides.component.scss']
})
export class TableSlidesComponent implements OnInit {
  @Input() slides!: Slide[];

  @Output() slideParaEliminar: EventEmitter<Slide> = new EventEmitter();
  
  constructor(private slideService: SlidesService) { }

  ngOnInit(): void {
  }

  capturarSlideParaEditar(slide: Slide){
    return this.slideService.setSlideParaEditar(slide);
  }

  capturarSlideParaEliminar(slide: Slide){
    return this.slideParaEliminar.emit(slide);
  }

}
