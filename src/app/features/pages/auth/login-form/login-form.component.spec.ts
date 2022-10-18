import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from "@angular/router/testing";
import { PrivateApiService } from 'src/app/core/services/privateApi/private-api.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { LoginFormComponent } from './login-form.component';
import { DialogErrorComponent } from "src/app/shared/components/alertas/dialog-error/dialog-error/dialog-error.component";
import { By } from '@angular/platform-browser';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let service: PrivateApiService;
  let store: MockStore;
  const initialState = {
    loggedIn: false
  };

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
    service = fixture.debugElement.injector.get(PrivateApiService);
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

  it('debe ser valido el formulario cuando se rellenan correctamente los 2 campos requeridos', () => {
    const form = component.formValue;
    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue("arg123!");

    expect(form.valid).toBeTruthy();
  });

  it('no debe hacer submit si el formulario es invalido (no llamara al servicio si es invalido)', () => {
    const form = component.formValue;
    const requestSpy = spyOn<any>(service, 'simplePostRequest');
    const btn = fixture.debugElement.query(By.css('.login_button'));

    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue(null);

    fixture.detectChanges();

    btn.triggerEventHandler('click', null);

    expect(requestSpy).not.toHaveBeenCalled();
  });

  it('debe abrirse el dialog de error si se hace submit con datos incorrectos', () => {
    const form = component.formValue;
    const requestSpy = spyOn<any>(service, 'simplePostRequest');
    const dialogSpy = spyOn(component.dialog, 'open');
    const btn = fixture.debugElement.query(By.css('.login_button'));

    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue("arg12345!");

    fixture.detectChanges();

    btn.triggerEventHandler('click', null);

    expect(requestSpy).toHaveBeenCalled();

    setTimeout(() => {
      expect(dialogSpy).toHaveBeenCalledWith(DialogErrorComponent, {
        width: "450px",
        height: "335px",
        data: {
          message: "Algo salió mal, por favor revisa los datos y vuelve a intentarlo."
        }
      });
    }, 5000);
  });

});
