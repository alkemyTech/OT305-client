import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Novedad } from 'src/app/core/models/novedad.model';
import { NovedadesService } from 'src/app/core/services/novedades/novedades.service';



@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit, OnDestroy {

  mode: boolean = true;
  novedades: Novedad [] = [] 
  title!:string;
  subject$ = new Subject()
  novedad!: Novedad
  novedadesDesdeBuscador!: Novedad [];

  constructor(private novedadService: NovedadesService) { }

  ngOnInit() { }

  ngOnDestroy() {
      this.subject$.next();
      this.subject$.complete();
  }
  
  recargarNovedades(){
    this.novedadService.listNews().pipe(takeUntil(this.subject$)).subscribe(res=>{
      this.novedades = res
    })
   }

   @HostListener('window:scroll', ['$event'])
   onScroll(){
    if(window.scrollY > 0){
      this.novedades = this.novedadesDesdeBuscador;
    }
   }
  
}
