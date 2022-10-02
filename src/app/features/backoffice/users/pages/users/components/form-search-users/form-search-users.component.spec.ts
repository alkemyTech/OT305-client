import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchUsersComponent } from './form-search-users.component';

describe('FormSearchUsersComponent', () => {
  let component: FormSearchUsersComponent;
  let fixture: ComponentFixture<FormSearchUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSearchUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
