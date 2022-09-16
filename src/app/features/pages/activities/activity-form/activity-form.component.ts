import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpService } from "src/app/core/services/http.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-activity-form",
  templateUrl: "./activity-form.component.html",
  styleUrls: ["./activity-form.component.scss"],
})
export class ActivityFormComponent {
  @Input() actividad: any;
  accion: string;
  form: FormGroup;
  foto: any;

  constructor(private fb: FormBuilder, private http: HttpService) {
    this.form = this.fb.group({
      image: [null, Validators.required],
      name: ["", Validators.required],
      description: [""],
    });

    if (this.actividad == null) {
      this.accion = "Agregar";
    } else {
      this.foto = this.actividad.image;
      this.form.controls["name"].setValue(this.actividad.name);
      this.form.controls["description"].setValue(this.actividad.description);
      this.accion = "Editar";
    }

    this.form.valueChanges.subscribe(() => {
      this.form.value.image = this.foto;
    });
  }

  crearActividad() {
    if (this.accion === "Agregar") {
      //petición POST al endpoint de creación de Novedades (/activities/create).

      this.http
        .post(
          "https://ongapi.alkemy.org/api/activities",
          {
            id: 0,
            name: this.form.value.name,
            slug: "",
            description: this.form.value.description,
            image: this.form.value.image,
            user_id: 0,
            category_id: 0,
            created_at: new Date(),
            updated_at: null,
            deleted_at: null,
          },
          false
        )
        .subscribe(
          () => {
            Swal.fire(
              "Actividad Agregada!",
              "La actividad fue agregada éxitosamente",
              "success"
            );
            this.foto = null;
            this.form.controls["image"].setValue(null);
            this.form.controls["name"].setValue("");
            this.form.controls["description"].setValue("");
          },
          (error) => {
            Swal.fire(
              "La Actividad no pudo ser Agregada",
              error.messagge,
              "error"
            );
          }
        );
    } else {
      //petición PATCH al endpoint de actualización del server (/activities/:id).

      if (this.form.value.image === null) {
        this.http
          .patch(
            `https://ongapi.alkemy.org/api/activities/${this.actividad.id}`,
            {
              name: this.form.value.name,
              description: this.form.value.description,
              image: this.form.value.image,
              updated_at: new Date(),
            },
            false
          )
          .subscribe(
            (data) => {
              console.log(data);
              Swal.fire(
                "Actividad Editada!",
                "La actividad fue editada éxitosamente",
                "success"
              );
            },
            (error) => {
              Swal.fire(
                "La Actividad no pudo ser Editada",
                error.messagge,
                "error"
              );
            }
          );
      } else
        this.http
          .patch(
            `https://ongapi.alkemy.org/api/activities/${this.actividad.id}`,
            {
              name: this.form.value.name,
              description: this.form.value.description,
              updated_at: new Date(),
            },
            false
          )
          .subscribe(
            (data) => {
              console.log(data);
              Swal.fire(
                "Actividad Editada!",
                "La actividad fue editada éxitosamente",
                "success"
              );
            },
            (error) => {
              Swal.fire(
                "La Actividad no pudo ser Editada",
                error.messagge,
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
