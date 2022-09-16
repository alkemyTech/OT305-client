import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsSectionComponent } from './us-section.component';

describe('UsSectionComponent', () => {
  let component: UsSectionComponent;
  let fixture: ComponentFixture<UsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
