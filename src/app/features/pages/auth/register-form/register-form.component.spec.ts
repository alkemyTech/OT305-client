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
    await TestBed.configureTestingModule({//proporcionamos las dependencias que usa nuestro componente en el testingModule
      declarations: [ RegisterFormComponent ], //declaramos el componente que se usará para probar
      imports: [ //importamos los modulos necesarios para que funcione el componente
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        MatDialogModule
      ],
      providers: [ //proveemos el servicio que se usa en el componente y creamos un mock del store para no usar el original
        PrivateApiService,
        provideMockStore({ initialState }) //creamos un initialState falso 
      ]
    })
    .compileComponents(); //y al terminar de configurar el modulo de testing se debe proceder a compilarlo
  });

  beforeEach(() => { //antes de cada prueba configuraremos lo que usaremos y como lo usaremos
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(PrivateApiService);
    store = TestBed.inject(MockStore);

    fixture.detectChanges(); //detectamos cambios
  });

  it('should create', () => { //en este test verificamos que se cree la instancia del componente correctamente
    expect(component).toBeTruthy();
  });

  it('debe ser invalido el formulario al no rellenarse todos los campos', () => {
    const form = component.miFormulario; //accedemos al formulario y lo encerramos en una vairable para acceder de forma más facil cuando lo usemos

    //procedemos a setearle valores de prueba a los campos y dejaremos uno sin llenar
    form.get("name")?.setValue("Prueba");
    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue("prueba123!");
    form.get("password2")?.setValue(null);

    fixture.detectChanges(); //detectamos cambios

    expect(form.valid).toBeFalsy(); //esperamos que el form.valid sea falso, es decir que sea invalido si no se rellenan todos los campos correctamente
  });

  it('debe ser valido el formulario al rellenarse todos los campos', () => {
    const form = component.miFormulario;

    //hacemos el mismo procedimiento pero ahora rellenamos todos los campos correctamente
    form.get("name")?.setValue("Prueba");
    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue("prueba123!");
    form.get("password2")?.setValue("prueba123!");

    fixture.detectChanges(); //detectamos los cambios

    expect(form.valid).toBeTruthy(); //ahora esperamos que el form.valid sea true, es decir que el formulario sea valido
  });

  it('debe NO hacer peticiones si se hace submit y no se aceptaron los terminos y condiciones, desplegando dialog', () => {
    const form = component.miFormulario;
    const dialogSpy = spyOn(component.dialog, 'open'); //creamos un espia que detectara cuando se llame a la funcion "open" del component.dialog
    const requestSpy = spyOn<any>(service, 'simplePostRequest'); //creamos un espia que detectara cuando se llame a la funcion "simplePostRequest" de nuestro servicio

    form.get("name")?.setValue("Prueba");
    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue("prueba123!");
    form.get("password2")?.setValue("prueba123!");

    fixture.detectChanges();

    //nuestro componente de registro nos pide que es necesario que se acepten los terminos y condiciones, y aqui no lo estamos aceptando
    //ejecutaremos la funcion "registrar" de nuestro componente, que es la encargada de llamar al servicio con nuestros datos del formulario SOLO si se aceptan los terminos y condiciones
    component.registrar();

    fixture.detectChanges();

    expect(requestSpy).not.toHaveBeenCalled(); //esperamos que NO se llame al servicio

    expect(dialogSpy).toHaveBeenCalledWith( //y esperamos que el dialog se abra con su respectivo componente e informando que es necesario aceptar los terminos y condiciones
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

    //ahora tambien crearemos un espia en el metodo del servicio, pero tambien haremos que retorne una simulacion de error para ver como reacciona nuestro componente
    const requestSpy = spyOn<any>(service, 'simplePostRequest').and.returnValue(of(
      {
        error: "Registro sin éxito"
      }
    ));

    form.get("name")?.setValue("Prueba");
    form.get("email")?.setValue("pruebapararegistro@gmail.com");
    form.get("password")?.setValue("prueba123!");
    form.get("password2")?.setValue("prueba123!");

    component.aceptTerms = true; //aceptamos los terminos y condiciones para que se haga correctamente la llamada al servicio

    fixture.detectChanges();

    component.registrar();

    fixture.detectChanges();

    expect(requestSpy).toHaveBeenCalled(); //ahora esperamos que SI se llame correctamente al metodo del servicio

    //pero al retornar un error como respuesta, nuestro componente debe responder abriendo el dialog informando el error
    expect(dialogSpy).toHaveBeenCalledWith( //esperamos que el dialog se abra, con su respectivo componente y la informacion debida para mostrar el error
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

    //haremos lo mismo en este caso pero simulando una respuesta de exito por parte del servicio
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

    expect(requestSpy).toHaveBeenCalled(); //ahora esperamos que el servicio sea llamado

    expect(dialogSpy).not.toHaveBeenCalled(); //pero al ser un caso de exito, esperamos que NO se abra el dialog
  });

});
