import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  @Input() user: any;
  accion: string;
  form: FormGroup;
  foto: any;

  constructor(private fb: FormBuilder, private http: HttpService) {
    this.form = this.fb.group({
      image: [null, Validators.required],
      name: ["", [Validators.required, Validators.minLength(4)]],
      email: ["", [Validators.required, Validators.email]],
      pass: ["", Validators.required],
      role: ["", Validators.required],
    });

    if (this.user == null) {
      this.accion = "Agregar";
    } else {
      this.foto = this.user.image;
      this.form.controls["name"].setValue(this.user.name);
      this.form.controls["email"].setValue(this.user.email);
      this.form.controls["pass"].setValue(this.user.pass);
      this.form.controls["role"].setValue(this.user.role);
      this.accion = "Editar";
    }

    this.form.valueChanges.subscribe(() => {
      this.form.value.image = this.foto;
    });
  }

  submitUser(){
    if (this.accion === "Agregar") {
      this.crearUser();
    } else {
      this.editarUser();
    }
  }

  crearUser() {
      //petición POST al endpoint de creación de Usuarios

      this.http
        .post(
          "https://ongapi.alkemy.org/api/users",
          {
            name: this.form.value.name,
            email: this.form.value.email,
            password: this.form.value.pass,
            profile_image: this.form.value.image,
            role_id: this.form.value.role
          },
          false
        )
        .subscribe(
          () => {
            Swal.fire(
              "Usuario Creado!",
              "El Usuario fue creado exitosamente",
              "success"
            );
            this.foto = null;
            this.form.controls["image"].setValue(null);
            this.form.controls["name"].setValue("");
            this.form.controls["email"].setValue("");
            this.form.controls["pass"].setValue("");
            this.form.controls["role"].reset();
          },
          (error) => {
            Swal.fire(
              "El Usuario no pudo ser creado",
              (Object.values(error.error.errors)).toString(),
              "error"
            );
          }
        );
  } 
  
  editarUser() {
    //petición PATCH al endpoint de actualización del server

    if (this.form.value.image === null) {
      this.http
        .patch(
          `https://ongapi.alkemy.org/api/users/${this.user.id}`,
          {
            name: this.form.value.name,
            email: this.form.value.email,
            password: this.form.value.pass,
            profile_image: this.form.value.image,
            role_id: this.form.value.role
          },
          false
        )
        .subscribe(
          (data) => {
            console.log(data);
            Swal.fire(
              "Usuario Editado!",
              "El usuario fue editado exitosamente",
              "success"
            );
          },
          (error) => {
            Swal.fire(
              "El Usuario no pudo ser Editado",
              (Object.values(error.error.errors)).toString(),
              "error"
            );
          }
        );
    } else {
      this.http
        .patch(
          `https://ongapi.alkemy.org/api/users/${this.user.id}`,
          {
            name: this.form.value.name,
            email: this.form.value.email,
            password: this.form.value.pass,
            profile_image: this.form.value.image,
            role_id: this.form.value.role
          },
          false
        )
        .subscribe(
          (data) => {
            console.log(data);
            Swal.fire(
              "Usuario Editado!",
              "El usuario fue editado exitosamente",
              "success"
            );
          },
          (error) => {
            Swal.fire(
              "El Usuario no pudo ser editado",
              (Object.values(error.error.errors)).toString(),
              "error"
            );
          }
        );
    }
  }
  

  // Guarda el archivo de la imagen correctamente en el form

  onFileSelect(input: any) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = (e: any) => {
        this.foto = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}