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
    component.form.controls["name"].setValue("prueba");
    component.form.controls["email"].setValue("prueba@gmail.com");
    component.form.controls["message"].setValue(null);

    component.sendForm();
    fixture.detectChanges();

    expect(component.dialogRef).toBe("Error");
  });

  // Si los campos se completaron, se deberá testear la correcta petición HTTP al endpoint de contacto
  //(POST /contacto), y los mensajes de error y éxito correspondientes en base al resultado de la petición.

  it("Deberá realizar una correcta petición al endpoint de contacto y mostrar un mensaje adecuado", (done) => {
    component.form.controls["name"].setValue("prueba");
    component.form.controls["email"].setValue("prueba@gmail.com");
    component.form.controls["message"].setValue(
      "Esta es una consulta de prueba"
    );

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
          expect(message).toBe("Contact saved successfully");
          done();
        },
        ({error}) => {
          expect(error.message).toBe("The given data was invalid.");
          done();
        }
      );

    fixture.detectChanges();
  });
});
