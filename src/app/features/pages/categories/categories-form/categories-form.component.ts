import { Component, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent{

  @Input() categoria: any;
  accion: string;
  form: FormGroup;
  foto: any;

  baseUrl: string = environment.apiUrl;
  categoriesUrl: string = environment.categories;

  constructor(private fb: FormBuilder, private http: HttpService) {
    this.form = this.fb.group({
      image: [null, Validators.required],
      name: ["", Validators.required, Validators.minLength(4)],
      description: [""],
    });

    if (this.categoria == null) {
      this.accion = "Agregar";
    } else {
      this.foto = this.categoria.image;
      this.form.controls["name"].setValue(this.categoria.name);
      this.form.controls["description"].setValue(this.categoria.description);
      this.accion = "Editar";
    }

    this.form.valueChanges.subscribe(() => {
      this.form.value.image = this.foto;
    });
  }

  submitCategoria(){
    if (this.accion === "Agregar") {
      this.crearCategoria();
    } else {
      this.editarCategoria();
    }
  }

  crearCategoria() {
      //petición POST al endpoint de creación de Categorías

      this.http
        .post(
          `${this.baseUrl}${this.categoriesUrl}`,
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
              "Categoría Agregada!",
              "La categoría fue agregada éxitosamente",
              "success"
            );
            this.foto = null;
            this.form.controls["image"].setValue(null);
            this.form.controls["name"].setValue("");
            this.form.controls["description"].setValue("");
          },
          (error) => {
            Swal.fire(
              "La Categoría no pudo ser Agregada",
              error.messagge,
              "error"
            );
          }
        );
  } 
  
  editarCategoria() {
    //petición PATCH al endpoint de actualización del server (/activities/:id).

    if (this.form.value.image === null) {
      this.http
        .patch(
          `${this.baseUrl}${this.categoriesUrl}/${this.categoria.id}`,
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
              "Categoría Editada!",
              "La categoría fue editada éxitosamente",
              "success"
            );
          },
          (error) => {
            Swal.fire(
              "La Categoría no pudo ser Editada",
              error.messagge,
              "error"
            );
          }
        );
    } else {
      this.http
        .patch(
          `${this.baseUrl}${this.categoriesUrl}/${this.categoria.id}`,
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
              "Categoría Editada!",
              "La categoría fue editada exitosamente",
              "success"
            );
          },
          (error) => {
            Swal.fire(
              "La Categoría no pudo ser Editada",
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
