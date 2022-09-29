import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearhMemberComponent } from './searh-member.component';

describe('SearhMemberComponent', () => {
  let component: SearhMemberComponent;
  let fixture: ComponentFixture<SearhMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearhMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearhMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
