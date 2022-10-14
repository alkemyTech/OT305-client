import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { HttpService } from "src/app/core/services/http.service";
import { SlidesService } from "src/app/core/services/slides/slides.service";
import { ResponseComponent } from "src/app/shared/components/alertas/response.component";

@Component({
  selector: "app-form-creacion-edicion-slides",
  templateUrl: "./form-creacion-edicion-slides.component.html",
  styleUrls: ["./form-creacion-edicion-slides.component.scss"],
})
export class FormCreacionEdicionSlidesComponent implements OnInit, OnDestroy {
  @Input() slide: any = null;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private slideService: SlidesService,
    private router: Router,
    public dialog: MatDialog,
  ) {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      description: ["", [Validators.required]],
      order: ["", [Validators.required]],
      image: ["", [Validators.required]],
    });
    this.obtenerSlide();
    this.verificarSiHaySlide();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.slide = null;
    this.slideService.setSlideParaEditar(null);
  }

  obtenerSlide() {
    this.slide = this.slideService.getSlideParaEditar();
  }

  verificarSiHaySlide() {
    if (this.slide !== null) {
      this.setValuesInForm();
    }
  }

  setValuesInForm() {
    const name = this.slide.name;
    const description = this.slide.description;
    const order = this.slide.order;

    this.form.get("name")?.setValue(name);
    this.form.get("description")?.setValue(description);
    this.form.get("order")?.setValue(order);
    this.form.get("image")?.setValue('none');
  }

  submitForm() {
    if (this.slide !== null) {
      this.patchSlide();
    } else {
      this.postSlide();
    }
  }

  postSlide() {
    this.slideService.postSlide(
        {
          id: 0,
          name: this.form.value.name,
          description: this.form.value.description,
          image: this.form.value.image,
          order: this.form.value.order,
          user_id: 0,
          created_at: new Date(),
          updated_at: null,
          deleted_at: null,
        }
      )
      .subscribe(
        (res) => {
          console.log("¡Slide creado con éxito!");
          return this.router.navigate(["/backoffice/slides"]);
        },
        (error) => {
          return console.log(
            "Ha ocurrido un error durante la operación, vuelva a intentarlo"
          );
        }
      );
  }

  patchSlide() {
    let data = {}

    if (this.form.value.image !== 'none') 
      data = {
        id: this.slide.id,
        name: this.form.value.name,
        description: this.form.value.description,
        image: this.form.value.image,
        order: this.form.value.order,
        updated_at: new Date(),
      }
    else 
      data = {
        id: this.slide.id,
        name: this.form.value.name,
        description: this.form.value.description,
        order: this.form.value.order,
        updated_at: new Date(),
      }

    this.slideService
      .putSlide(data)
      .subscribe(
        (res) => {
          console.log(res);
          this.openDialog("¡Slide editado con éxito!", "El Slide fue editado exitosamente", "Success");
          this.router.navigate(["/backoffice/slides"]);
        },
        ({error}) => {
          this.openDialog(
            "Ha ocurrido un error durante la operación, vuelva a intentarlo",
            error.message,
            "Error"
          );
        }
      );
  }

  openDialog(titulo: string, mensaje: string, tipo: string): void {
    const dialogRef = this.dialog.open(ResponseComponent, {
      data: {
        message: mensaje,
        title: titulo,
        type: tipo,
      },
    });
  }

  capturarImagen(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.form.get("image")?.setValue(reader.result);
    };
  }
}
