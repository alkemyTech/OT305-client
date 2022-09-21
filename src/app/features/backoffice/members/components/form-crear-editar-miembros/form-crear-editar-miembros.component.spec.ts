import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCrearEditarMiembrosComponent } from './form-crear-editar-miembros.component';

describe('FormCrearEditarMiembrosComponent', () => {
  let component: FormCrearEditarMiembrosComponent;
  let fixture: ComponentFixture<FormCrearEditarMiembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCrearEditarMiembrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCrearEditarMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
