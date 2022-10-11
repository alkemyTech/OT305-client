import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectViewIdUser } from 'src/app/core/ngrx/selectors/auth.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  show: boolean = false;

  
  userId$: Observable<number | null> = new Observable<number>();

  registerView = this.restrictView(this.userId$)
  
  public = [
    { texto: 'Inicio', link: '/home', show: true },
    { texto: 'Actividades', link: '/actividades', show: true },
    { texto: 'Nosotros', link: '/nosotros', show: true },
    { texto: 'Novedades', link: '/novedades', show: true },
    { texto: 'Testimonios', link: '/testimonios', show: true },
    { texto: 'Contacto', link: '/contacto', show: this.restrictView(this.userId$) },
  ];
  
  campaigns = [
    { texto: 'Materiales Escolares', link: '/landing/escolar', show: true },
    { texto: 'Juguetes', link: '/landing/juguetes', show: true },
  ];
  
  
  constructor( private store: Store) { 
    this.userId$ = store.select(selectViewIdUser);
  }

  ngOnInit(): void {
    
  }

  restrictView(userId$: Observable<number | null>){
    userId$.subscribe( id => {
      if(id === 1){
        return false
      }
      return true
    })
  }

}
