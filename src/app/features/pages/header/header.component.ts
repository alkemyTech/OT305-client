import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  show: boolean = false;
  public = [
    { texto: 'Inicio', link: '/home', show: true },
    { texto: 'Nosotros', link: '/nosotros', show: true },
    { texto: 'Novedades', link: '/novedades', show: true },
    { texto: 'Testimonios', link: '/testimonios', show: true },
    { texto: 'Contacto', link: '/contacto', show: true },
    { texto: 'Contribuye', link: '/donaciones', show: true },
  ];
  campaigns = [
    { texto: 'Materiales Escolares', link: '/landing/escolar', show: true },
    { texto: 'Juguetes', link: '/landing/juguetes', show: true },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
