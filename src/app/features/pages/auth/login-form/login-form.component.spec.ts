import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from "@angular/router/testing";
import { PrivateApiService } from 'src/app/core/services/privateApi/private-api.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let store: MockStore;
  const initialState = {
    loggedIn: false
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
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
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe ser invalido el formulario si no se rellenan los 2 campos requeridos', () => {
    const form = component.formValue;
    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue(null);

    expect(form.valid).toBeFalsy();
  });

  it('debe ser valido el formulario si cuando se rellenan los 2 campos requeridos', () => {
    const form = component.formValue;
    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue("arg123!");

    expect(form.valid).toBeTruthy();
  });
});
