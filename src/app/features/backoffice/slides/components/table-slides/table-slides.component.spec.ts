import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSlidesComponent } from './table-slides.component';

describe('TableSlidesComponent', () => {
  let component: TableSlidesComponent;
  let fixture: ComponentFixture<TableSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSlidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
