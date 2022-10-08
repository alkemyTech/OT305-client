import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCampanasComponent } from './header-campanas.component';

describe('HeaderCampanasComponent', () => {
  let component: HeaderCampanasComponent;
  let fixture: ComponentFixture<HeaderCampanasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCampanasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCampanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
