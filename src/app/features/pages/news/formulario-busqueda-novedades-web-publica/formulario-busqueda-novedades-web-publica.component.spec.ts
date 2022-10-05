/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormularioBusquedaNovedadesWebPublicaComponent } from './formulario-busqueda-novedades-web-publica.component';

describe('FormularioBusquedaNovedadesWebPublicaComponent', () => {
  let component: FormularioBusquedaNovedadesWebPublicaComponent;
  let fixture: ComponentFixture<FormularioBusquedaNovedadesWebPublicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioBusquedaNovedadesWebPublicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioBusquedaNovedadesWebPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
