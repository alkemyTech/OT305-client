import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBackofficeComponent } from './app-backoffice.component';

describe('AppBackofficeComponent', () => {
  let component: AppBackofficeComponent;
  let fixture: ComponentFixture<AppBackofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBackofficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBackofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
