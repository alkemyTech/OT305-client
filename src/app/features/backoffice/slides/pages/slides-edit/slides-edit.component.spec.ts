import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesEditComponent } from './slides-edit.component';

describe('SlidesEditComponent', () => {
  let component: SlidesEditComponent;
  let fixture: ComponentFixture<SlidesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
