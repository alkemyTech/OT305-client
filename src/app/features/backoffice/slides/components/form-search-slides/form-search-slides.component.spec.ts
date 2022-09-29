import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchSlidesComponent } from './form-search-slides.component';

describe('FormSearchSlidesComponent', () => {
  let component: FormSearchSlidesComponent;
  let fixture: ComponentFixture<FormSearchSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSearchSlidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
