import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesCreateComponent } from './slides-create.component';

describe('SlidesCreateComponent', () => {
  let component: SlidesCreateComponent;
  let fixture: ComponentFixture<SlidesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
