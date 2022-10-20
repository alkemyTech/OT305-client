import { Component, Input, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  MinLengthValidator,
  Validators,
} from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { Categoria } from "src/app/core/models/categoria.models";
import { HttpService } from "src/app/core/services/http.service";
import { AlertasComponent } from "src/app/shared/components/alertas/alertas.component";
import Swal from "sweetalert2";

@Component({
  selector: "app-news-form",
  templateUrl: "./news-form.component.html",
  styleUrls: ["./news-form.component.scss"],
})
export class NewsFormComponent {
  @Input() novedad: any;
  @Input() accion!: string;
  id: number;
  form!: FormGroup;
  foto!: any;
  categorias: Categoria[] = [];
  categoria: Categoria = new Categoria();
  loading: boolean = true;

  constructor(
    public fb: FormBuilder,
    private aRoute: ActivatedRoute ,
    private http: HttpService,
    public dialog: MatDialog
  ) {
    this.form = this.fb.group({
      titulo: ["", [Validators.required, Validators.minLength(4)]],
      image: ["", Validators.required],
      contenido: ["", Validators.required],
      categoria: ["", Validators.required],
    });

    this.id = this.aRoute.snapshot.params["id"];

    if (this.novedad == null && this.id == undefined) {
      this.accion = "Agregar";
    } else {
      this.foto = this.novedad.image;
      this.form.controls["titulo"].setValue(this.novedad.titulo);
      this.form.controls["categoria"].setValue(this.novedad.categoria);
      this.form.controls["contenido"].setValue(this.novedad.contenido);
      this.accion = "Editar";
    }
    this.form.valueChanges.subscribe(() => {
      this.form.value.image = this.foto;
    });
    this.getCategoria();
  }

  getCategoria() {
    // petecion get al enpoint de categoria para el input categoria
    this.http
      .get("https://ongapi.alkemy.org/api/categories")
      .subscribe((res: any) => {
        for (let req of res.data) {
          this.categoria = req;
          this.categorias.push(this.categoria);
          this.loading = false;
        }
      });
  }

  cambiarAccion(){
    if(this.novedad == null){
      this.accion = "Agregar";
    } else { 
        this.accion = "Editar"
      }
    }
  

  cambiarModo(){
    if(this.accion === "Agregar" && this.id == undefined){
      this.agregarNovedad();
    } else {
      this.accion = "Editar";
      this.editarNovedad();
    }
  }

  agregarNovedad(){
    this.http
    .post(
      "https://ongapi.alkemy.org/api/news",
      {
        id: 0,
        name: this.form.value.titulo,
        slug: "",
        content: this.form.value.contenido,
        image: this.form.value.image,
        user_id: null,
        category_id: (this.form.value.categoria = this.categoria.id),
        created_at: new Date(),
        updated_at: "",
        deleted_at: null,
        group_id: null,
      },
      false
    )
    .subscribe(
      () => {
        this.openDialog(
          "Novedad Agregada!",
          "La novedad fue agregada éxitosamente"
        );

        this.foto = null;
        this.form.controls["titulo"].setValue("");
        this.form.controls["image"].setValue(null);
        this.form.controls["categoria"].setValue("");
        this.form.controls["contenido"].setValue("");
      },
      (error) => {
        this.openDialog("La novedad no pudo ser Agregada", error.messagge);
      }
    );
  }

  editarNovedad(){
    if (this.form.value.image === null) {
      this.http
        .patch(
          `https://ongapi.alkemy.org/api/news/${this.novedad.id}`,
          {
            name: this.form.value.titulo,
            content: this.form.value.contenido,
            category_id: (this.form.value.categoria = this.categoria.id),
            image: this.form.value.image,
            updated_at: new Date(),
          },
          false
        )
        .subscribe(
          (res) => {
            console.log(res);
            this.openDialog(
              "Novedad editada!",
              "La novedad fue editada éxitosamente"
            );
          },
          (error) => {
            this.openDialog("La novedad no pudo ser editada", error.messagge);
          }
        );
        this.accion = "Editar";
    } else {
      this.http
        .patch(
          `https://ongapi.alkemy.org/api/news/${this.novedad.id}`,
          {
            name: this.form.value.titulo,
            content: this.form.value.contenido,
            category_id: (this.form.value.categoria = this.categoria.id),
            updated_at: new Date(),
          },
          false
        )
        .subscribe(
          (res) => {
            console.log(res);
            this.openDialog(
              "Novedad editada!",
              "La novedad editada éxitosamente"
            );
          },
          (error) => {
            this.openDialog("La novedad no pudo ser editada", error.messagge);
          }
        );
        this.accion = "Editar";
    }
  }


  onFileSelect(input: any) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = (e: any) => {
        this.foto = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  openDialog(titulo: string, mensaje: string): void {
    const dialogRef = this.dialog.open(AlertasComponent, {
      width: "400px",
      data: {
        cancelText: "Cerrar",
        confirmText: "Ok",
        message: mensaje,
        title: titulo,
      },
    });
  }
}
