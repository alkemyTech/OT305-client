import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PrivateApiService } from 'src/app/core/services/privateApi/private-api.service';

import { RegisterFormComponent } from './register-form.component';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;
  let service: PrivateApiService;
  let store: MockStore;

  const initialState = {
    registerSuccess: false
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFormComponent ],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatDialogModule
      ],
      providers: [
        PrivateApiService,
        provideMockStore({ initialState })
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(PrivateApiService);
    store = TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe ser invalido el formulario al no rellenarse todos los campos', () => {
    const form = component.miFormulario;

    form.get("name")?.setValue("Prueba");
    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue("prueba123!");
    form.get("password2")?.setValue(null);

    expect(form.valid).toBeFalsy();
  });

  it('debe ser valido el formulario al rellenarse todos los campos', () => {
    const form = component.miFormulario;

    form.get("name")?.setValue("Prueba");
    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue("prueba123!");
    form.get("password2")?.setValue("prueba123!");

    expect(form.valid).toBeTruthy();
  });

});
