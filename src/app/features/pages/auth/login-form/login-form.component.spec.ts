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
    //configuramos correctamente el testingModule, se deben agregar todas las dependencias necesarias para que el componente funcione, es decir todas las que usa
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponent], //declaramos el componente que sera usado
      imports: [
        HttpClientModule, //agregamos el HttpClientModule ya que nuestro componente usa el servicio que tiene HttpClient
        FormsModule, //nuestro componente usa los formularios reactivos, por lo tanto necesita en el módulo el FormsModulo y ReactiveFormsModule
        ReactiveFormsModule,
        RouterTestingModule, //tambien usa el router y matdialog, asi que los importamos
        MatDialogModule
      ],
      providers: [
        PrivateApiService, //proveemos el servicio que usa nuestro componente
        provideMockStore({ initialState }) //proveemos un mock del store, ya que se usa Store en el componente
      ]
    })
    .compileComponents(); //una vez configurado todo, se necesita compilar
  });

  //antes de cada test se configuraran qué serán y qué utilidad tendrán las variables que usaremos a lo largo de los tests
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(PrivateApiService);
    store = TestBed.inject(MockStore);

    fixture.detectChanges(); //importante para que se detecten los cambios, ya que lo tenemos que hacer de forma manual en los tests
  });

  it('should create', () => {
    expect(component).toBeTruthy(); //se verifica inicialmente si la instancia del componente es verdadera, es decir que se creó correctamente
  });

  it('debe ser invalido el formulario si no se rellenan los 2 campos requeridos', () => {
    const form = component.formValue; //accedemos al formulario y lo asignamos en una variable para acceder mas facilmente luego
    form.get("email")?.setValue("pruebapararegistro@gmail.com"); //se asignan valores de prueba a los campos del formulario
    form.get("password")?.setValue(null);

    expect(form.valid).toBeFalsy(); //se espera (expect) que el form.valid sea falso, es decir que sea invalido
  });

  it('debe ser valido el formulario cuando se rellenan correctamente los 2 campos requeridos', () => {
    const form = component.formValue;
    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue("arg123!");

    expect(form.valid).toBeTruthy(); //se espera que el form.valid sea true, es decir que el formulario sea valido con los valores asignados
  });

  it('no debe hacer submit si el formulario es invalido (no llamara al servicio si es invalido)', () => {
    const form = component.formValue;
    const requestSpy = spyOn<any>(service, 'simplePostRequest'); //creamos un espia en el servicio, especificamente en el metodo "simplePostRequest"
    const btn = fixture.debugElement.query(By.css('.login_button')); //accedemos al boton responsable de hacer submit al formulario (hacer login)

    form.get("email")?.setValue("pruebapararegistro@gmail.com"); //seteamos valores de prueba a los campos del form
    form.get("password")?.setValue(null); //le pasamos null para que el formulario sea invalido a proposito

    fixture.detectChanges(); //detectamos cambios para que se vean reflejados

    btn.triggerEventHandler('click', null); //creamos un evento click en el boton (para que ejecute la funcion de login y llame al servicio)

    expect(requestSpy).not.toHaveBeenCalled(); //hacemos uso del espia que creamos en el servicio, y esperamos que NO haya sido llamado cuando se hizo login, ya que se debe unicamente llamar al servicio si el formulario es valido
  });

  it('debe realizarse el login correctamente (el componente reacciona a los datos de exito de la respuesta de la api)', () => {
    const form = component.formValue;
    const dialogSpy = spyOn(component.dialog, 'open'); //accedemos al dialog que se instancio en el componente, y creamos un espia en su metodo "open"
    const btn = fixture.debugElement.query(By.css('.login_button'));
    //realizamos el mismo procedimiento anterior pero esta vez con datos correctos para que sea valido el form
    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue("arg123!");

    fixture.detectChanges();
    //creamos un espia en el servicio, pero ademas nos encargamos de que retorne un valor simulando el exito de la peticion a la API, y lo transformamos en observable ya que se debe subscribir en el componente a esta respuesta
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

    btn.triggerEventHandler('click', null); //al ejecutarse nuestro evento click, se llamará al servicio, pero el espia creado interceptará la llamada y retornará el valor que nosotros le hemos dicho

    fixture.detectChanges(); //detectamos cambios

    //nuestro componente al estar subscrito a la respuesta de la API, cambia algunas cosas si todo sale bien, una de ellas es el rol
    expect(component.rol).toBe(1); //esperamos que el component.rol ahora sea igual al rol obtenido del usuario en la respuesta de la API

    expect(dialogSpy).not.toHaveBeenCalled(); //esperamos que el dialog de error NO haya sido llamado

  });

  it('debe mostrar error si el login es incorrecto (el componente reacciona a los datos de error de la respuesta de la api)', () => {
    //hacemos el mismo procedimiento que antes pero con datos incorrectos
    const form = component.formValue;
    const dialogSpy = spyOn(component.dialog, 'open');
    const btn = fixture.debugElement.query(By.css('.login_button'));

    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue("arg12345!");

    fixture.detectChanges();

    //ahora agregamos nuestro espia pero queremos que retorne la respuesta de error, para ver como reacciona nuestro componente
    spyOn<any>(service, 'simplePostRequest').and.returnValue(of(
      {
        "error": "No token"
      }
    ));

    fixture.detectChanges();

    btn.triggerEventHandler('click', null);

    fixture.detectChanges();
    
    expect(component.rol).not.toBe(1); //esperamos que el component.rol NO haya cambiado

    expect(dialogSpy).toHaveBeenCalledWith( //esperamos que el dialog error haya sido abierto con estos valores
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
