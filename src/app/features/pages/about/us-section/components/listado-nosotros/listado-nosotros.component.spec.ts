import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNosotrosComponent } from './listado-nosotros.component';

describe('ListadoNosotrosComponent', () => {
  let component: ListadoNosotrosComponent;
  let fixture: ComponentFixture<ListadoNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoNosotrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
