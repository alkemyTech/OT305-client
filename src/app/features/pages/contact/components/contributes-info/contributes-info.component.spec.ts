import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributesInfoComponent } from './contributes-info.component';

describe('ContributesInfoComponent', () => {
  let component: ContributesInfoComponent;
  let fixture: ComponentFixture<ContributesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
