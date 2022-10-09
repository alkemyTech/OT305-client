import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Contacts } from "src/app/core/models/contacts.model";
import { ContactsService } from "src/app/core/services/contacts/contacts.service";
import { AlertasComponent } from "src/app/shared/components/alertas/alertas.component";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
  form!: FormGroup;
  contactModel: Contacts = new Contacts();

  constructor(
    private fb: FormBuilder,
    private contactService: ContactsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.campos();
  }
  campos() {
    this.form = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      message: ["", Validators.required],
    });
  }

  sendForm() {
    this.contactModel.name = this.form.value.name;
    this.contactModel.email = this.form.value.email;
    this.contactModel.message = this.form.value.message;
    if (this.form.invalid) {
      this.openDialog("error!", "Por favor rellena todos los campos");
    } else {
      this.contactService.setContact(this.contactModel).subscribe(
        (res) => {
          console.log(res);
          this.openDialog(
            "Mensaje enviado exitosamente!",
            "Pronto nos pondremos en contacto contigo"
          );
          this.form.reset();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  openDialog(titulo: string, mensaje: string): void {
    const dialogRef = this.dialog.open(AlertasComponent, {
      width: "350px",
      data: {
        cancelText: "Cerrar",
        confirmText: "Ok",
        message: mensaje,
        title: titulo,
      },
    });
  }
}
