import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  @Input() proyecto: any;
  accion: string;
  form: FormGroup;
  foto: any;

  constructor(private fb: FormBuilder, private http: HttpService) {
    this.form = this.fb.group({
      image: [null, Validators.required],
      title: ["", Validators.required],
      due_date: [""],
      description: ["", Validators.required],
    });

    if (this.proyecto == null) {
      this.accion = "Agregar";
    } else {
      this.foto = this.proyecto.image;
      this.form.controls["title"].setValue(this.proyecto.title);
      this.form.controls["description"].setValue(this.proyecto.description);
      this.accion = "Editar";
    }

    this.form.valueChanges.subscribe(() => {
      this.form.value.image = this.foto;
    });
  }

  submitProyecto(){
    if (this.accion === "Agregar") {
      this.crearProyecto();
    } else {
      this.editarProyecto();
    }
  }

  crearProyecto() {
      //petición POST al endpoint de creación de Proyectos
      
      this.http
        .post(
          "https://ongapi.alkemy.org/api/projects",
          {
            "title": this.form.value.title,
            "description": this.form.value.description,
            // Error en el endpoint con la subida de imagenes en base 64
            // "image": this.form.value.image,      
            "due_date": this.form.value.due_date
          },
          false
        )
        .subscribe(
          () => {
            Swal.fire(
              "Proyecto Agregado!",
              "El Proyecto fue agregado exitosamente",
              "success"
            );
            this.foto = null;
            this.form.controls["image"].setValue(null);
            this.form.controls["title"].setValue("");
            this.form.controls["description"].setValue("");
            this.form.controls["due_date"].reset;
          },
          (error) => {
            Swal.fire(
              "El Proyecto no pudo ser agregado",
              error.messagge,
              "error"
            );
          }
        );
  } 
  
  editarProyecto() {
    //petición PATCH al endpoint de actualización del server

    if (this.form.value.image === null) {
      this.http
        .patch(
          `https://ongapi.alkemy.org/api/projects/${this.proyecto.id}`,
          {
            title: this.form.value.title,
            description: this.form.value.description,
            image: this.form.value.image,
            due_date: this.form.value.due_date
          },
          false
        )
        .subscribe(
          (data) => {
            console.log(data);
            Swal.fire(
              "Proyecto Editado!",
              "El proyecto fue editado exitosamente",
              "success"
            );
          },
          (error) => {
            Swal.fire(
              "El Proyecto no pudo ser editado",
              error.messagge,
              "error"
            );
          }
        );
    } else {
      this.http
        .patch(
          `https://ongapi.alkemy.org/api/projects/${this.proyecto.id}`,
          {
            title: this.form.value.title,
            description: this.form.value.description,
            updated_at: new Date(),
          },
          false
        )
        .subscribe(
          (data) => {
            console.log(data);
            Swal.fire(
              "Proyecto Editado!",
              "El proyecto fue editado exitosamente",
              "success"
            );
          },
          (error) => {
            Swal.fire(
              "El Proyecto no pudo ser editado",
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