import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { ContactsService } from "src/app/core/services/contacts/contacts.service";

import { ContactFormComponent } from "./contact-form.component";

describe("ContactFormComponent", () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  let service: ContactsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactFormComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientModule,
        MatDialogModule,
        BrowserAnimationsModule,
      ],
      providers: [ContactsService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ContactsService);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // verificando que no permita hacer un submit si no se completó correctamente
  // y se muestren los mensajes de error en ese caso.

  it("No debe hacer Submit y debe mostrar mensaje de error", () => {

    // Completa los campos del formulario de modo que este sea invalido

    component.form.controls["name"].setValue("prueba");
    component.form.controls["email"].setValue("prueba@gmail.com");
    component.form.controls["message"].setValue(null);

    // Llama al método encargado del submit

    component.sendForm();
    fixture.detectChanges();


    // Comprueba que se haya llamado al método encargado de mostrar un mensaje de error

    expect(component.dialogRef).toBe("Error");
  });

  // Si los campos se completaron, se deberá testear la correcta petición HTTP al endpoint de contacto
  //(POST /contacto), y los mensajes de error y éxito correspondientes en base al resultado de la petición.

  it("Deberá realizar una correcta petición al endpoint de contacto y mostrar un mensaje adecuado", (done) => {
    
    // Completa los campos del formulario de modo que este sea valido
    
    component.form.controls["name"].setValue("prueba");
    component.form.controls["email"].setValue("prueba@gmail.com");
    component.form.controls["message"].setValue(
      "Esta es una consulta de prueba"
    );

    // Llamada al método post de contacto

    service
      .setContact({
        id: 0,
        name: component.form.value.name,
        email: component.form.value.email,
        phone: "",
        message: component.form.value.message,
        deleted_at: "",
        created_at: new Date(),
        updated_at: "",
      })
      .subscribe(
        ({ message }) => {

          // En caso de que la peticion se realize correctamente se espera el siguiente mensaje

          expect(message).toBe("Contact saved successfully");
          done();
        },
        ({error}) => {

          // En caso de que la peticion no se realize correctamente se espera el siguiente mensaje

          expect(error.message).toBe("The given data was invalid.");
          done();
        }
      );

    fixture.detectChanges();
  });
});
