import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from "@angular/router/testing";
import { PrivateApiService } from 'src/app/core/services/privateApi/private-api.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { LoginFormComponent } from './login-form.component';
import { DialogErrorComponent } from "src/app/shared/components/alertas/dialog-error/dialog-error/dialog-error.component";
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

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
      declarations: [ LoginFormComponent],
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

  it('debe realizarse el login correctamente (el componente reacciona a los datos de exito de la respuesta de la api)', () => {
    const form = component.formValue;
    const dialogSpy = spyOn(component.dialog, 'open');
    const btn = fixture.debugElement.query(By.css('.login_button'));

    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue("arg123!");

    fixture.detectChanges();

    spyOn<any>(service, 'simplePostRequest').and.returnValue(of(
      {
        "success": true,
        "data": {
          "user": {
            "id": 4036,
            "name": "pruebaRegistro",
            "email": "pruebapararegistro@gmail.com",
            "email_verified_at": null,
            "password": "$2y$10$2dswfXIPrpBW08rDNU0XA..4INmTqMzSmom2uwadbPiyWcGkSKkO.",
            "role_id": 1,
            "remember_token": null,
            "created_at": "2022-10-14T06:42:21.000000Z",
            "updated_at": "2022-10-14T06:42:21.000000Z",
            "deleted_at": null,
            "group_id": null,
            "latitude": null,
            "longitude": null,
            "address": null,
            "profile_image": null
          },
          "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvb25nYXBpLmFsa2VteS5vcmdcL2FwaVwvbG9naW4iLCJpYXQiOjE2NjYyMzE4MzIsImV4cCI6MTY2NjIzNTQzMiwibmJmIjoxNjY2MjMxODMyLCJqdGkiOiJXWHpXclM5NGFWelNuNHA4Iiwic3ViIjo0MDM2LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0._FxvI-J-lBX5rK-EQQTFc_veboS4hXkbI0D02ldOHvo"
        },
        "message": "user login okey"
    }
    ));

    fixture.detectChanges();

    btn.triggerEventHandler('click', null);

    fixture.detectChanges();
    
    expect(component.rol).toBe(1);

    expect(dialogSpy).not.toHaveBeenCalled();

  });

  it('debe mostrar error si el login es incorrecto (el componente reacciona a los datos de error de la respuesta de la api)', () => {
    const form = component.formValue;
    const dialogSpy = spyOn(component.dialog, 'open');
    const btn = fixture.debugElement.query(By.css('.login_button'));

    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue("arg123!");

    fixture.detectChanges();

    spyOn<any>(service, 'simplePostRequest').and.returnValue(of(
      {
        "error": "No token"
      }
    ));

    fixture.detectChanges();

    btn.triggerEventHandler('click', null);

    fixture.detectChanges();
    
    expect(component.rol).not.toBe(1);

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

});
