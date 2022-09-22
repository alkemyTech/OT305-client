import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreacionEdicionSlidesComponent } from './form-creacion-edicion-slides.component';

describe('FormCreacionEdicionSlidesComponent', () => {
  let component: FormCreacionEdicionSlidesComponent;
  let fixture: ComponentFixture<FormCreacionEdicionSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreacionEdicionSlidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreacionEdicionSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
