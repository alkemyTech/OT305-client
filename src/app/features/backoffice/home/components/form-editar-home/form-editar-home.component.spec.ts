import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditarHomeComponent } from './form-editar-home.component';

describe('FormEditarHomeComponent', () => {
  let component: FormEditarHomeComponent;
  let fixture: ComponentFixture<FormEditarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditarHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
