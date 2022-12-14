import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreNosotrosComponent } from './sobre-nosotros.component';

describe('SobreNosotrosComponent', () => {
  let component: SobreNosotrosComponent;
  let fixture: ComponentFixture<SobreNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreNosotrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the component receives the input', () => {
    const comp = new SobreNosotrosComponent();
    const textoParaMostrar: string = "";

    expect(comp.textoParaMostrar).toMatch(textoParaMostrar);
  });
});
