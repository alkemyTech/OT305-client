import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { PrivateApiService } from 'src/app/core/services/privateApi/private-api.service';
import { DialogErrorComponent } from 'src/app/shared/components/alertas/dialog-error/dialog-error/dialog-error.component';
import { ResponseComponent } from 'src/app/shared/components/alertas/response.component';

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
        BrowserAnimationsModule,
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

    fixture.detectChanges();

    expect(form.valid).toBeFalsy();
  });

  it('debe ser valido el formulario al rellenarse todos los campos', () => {
    const form = component.miFormulario;

    form.get("name")?.setValue("Prueba");
    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue("prueba123!");
    form.get("password2")?.setValue("prueba123!");

    fixture.detectChanges();

    expect(form.valid).toBeTruthy();
  });

  it('debe NO hacer peticiones si se hace submit y no se aceptaron los terminos y condiciones, desplegando dialog', () => {
    const form = component.miFormulario;
    const dialogSpy = spyOn(component.dialog, 'open');
    const requestSpy = spyOn<any>(service, 'simplePostRequest');

    form.get("name")?.setValue("Prueba");
    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue("prueba123!");
    form.get("password2")?.setValue("prueba123!");

    fixture.detectChanges();

    component.registrar();

    fixture.detectChanges();

    expect(requestSpy).not.toHaveBeenCalled();

    expect(dialogSpy).toHaveBeenCalledWith(
      ResponseComponent, {
        data: {
          message: "Lea y acepte terminos y condiciones para registrarse",
          title: "DEBE ACEPTAR TERMINOS Y CONDICIONES",
          type: "Error",
        },
      }
    );
  });

  it('debe hacer peticiones correctamente al hacer submit y aceptar terminos y condiciones, abrir dialog en caso de registro no exitoso', () => {
    const form = component.miFormulario;
    const dialogSpy = spyOn(component.dialog, 'open');
    const requestSpy = spyOn<any>(service, 'simplePostRequest').and.returnValue(of(
      {
        error: "Registro sin éxito"
      }
    ));

    form.get("name")?.setValue("Prueba");
    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue("prueba123!");
    form.get("password2")?.setValue("prueba123!");

    component.aceptTerms = true;

    fixture.detectChanges();

    component.registrar();

    fixture.detectChanges();

    expect(requestSpy).toHaveBeenCalled();

    expect(dialogSpy).toHaveBeenCalledWith(
      DialogErrorComponent, {
        width: "450px",
        height: "335px",
        data: {
          message: "Algo salió mal, por favor revisa los datos y vuelve a intentarlo."
        }
      }
    );
  });

  it('debe reaccionar correctamente ante la respuesta de la API de registro exitoso', () => {
    const form = component.miFormulario;
    const dialogSpy = spyOn(component.dialog, 'open');
    const requestSpy = spyOn<any>(service, 'simplePostRequest').and.returnValue(of(
      {
        data: [
          {
            user: "Registro con éxito"
          }
        ]
      }
    ));

    form.get("name")?.setValue("Prueba");
    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue("prueba123!");
    form.get("password2")?.setValue("prueba123!");

    component.aceptTerms = true;

    fixture.detectChanges();

    component.registrar();

    fixture.detectChanges();

    expect(requestSpy).toHaveBeenCalled();

    expect(dialogSpy).not.toHaveBeenCalled();
  });

});
