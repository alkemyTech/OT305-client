/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormularioBusquedaNovedadesComponent } from './formulario-busqueda-novedades.component';

describe('FormularioBusquedaNovedadesComponent', () => {
  let component: FormularioBusquedaNovedadesComponent;
  let fixture: ComponentFixture<FormularioBusquedaNovedadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioBusquedaNovedadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioBusquedaNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
