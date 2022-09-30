import { Component, Input, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { HttpService } from "src/app/core/services/http.service";
import { TestimonioService } from "src/app/core/services/testimonials/testimonio.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-testimonial-form",
  templateUrl: "./testimonial-form.component.html",
  styleUrls: ["./testimonial-form.component.scss"],
})
export class TestimonialFormComponent implements OnDestroy{
  private desub$ = new Subject<void>();
  @Input() testimonio: any;
  accion: string;
  form: FormGroup;
  foto: any;

  constructor(
    private fb: FormBuilder,
    private testimonioService: TestimonioService
  ) {
    this.form = this.fb.group({
      image: [null, Validators.required],
      name: ["", [Validators.required, Validators.minLength(4)]],
      description: ["", Validators.required],
    });

    if (this.testimonio == null) {
      this.accion = "Agregar";
    } else {
      this.foto = this.testimonio.image;
      this.form.controls["name"].setValue(this.testimonio.name);
      this.form.controls["description"].setValue(this.testimonio.description);
      this.accion = "Editar";
    }

    this.form.valueChanges.subscribe(() => {
      this.form.value.image = this.foto;
    });
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

  onSubmit() {
    if (this.accion === "Agregar") this.crearTestimonio();
    else this.actualizarTestimonio();
  }

  crearTestimonio() {
    // petición POST al endpoint de creación (/testimonials/create)
    let data = {
      id: 0,
      name: this.form.value.name,
      image: this.form.value.image,
      description: this.form.value.description,
      created_at: new Date(),
      updated_at: null,
      deleted_at: null,
    };

    this.testimonioService.setTestimonio(data).pipe(takeUntil(this.desub$))
    .subscribe(
      () => {
        Swal.fire(
          "Testimonio Agregado!",
          "El testimonio fue agregado éxitosamente",
          "success"
        );
        this.foto = null;
        this.form.controls["image"].setValue(null);
        this.form.controls["name"].setValue("");
        this.form.controls["description"].setValue("");
      },
      (error) => {
        Swal.fire(
          "El testimonio no pudo ser Agregado",
          error.messagge,
          "error"
        );
      }
    );
  }

  actualizarTestimonio() {
    //petición PATCH al endpoint de actualización del server (/testimonials/:id).

    if (this.form.value.image === null) {
      let data = {
        name: this.form.value.name,
        description: this.form.value.description,
        image: this.form.value.image,
        updated_at: new Date(),
      };

      this.testimonioService.updateTestimonio(data).pipe(takeUntil(this.desub$))
      .subscribe(
        (data) => {
          console.log(data);
          Swal.fire(
            "Testimonio Editado!",
            "El testimonio fue editado éxitosamente",
            "success"
          );
        },
        (error) => {
          Swal.fire(
            "El testimonio no pudo ser Editado",
            error.messagge,
            "error"
          );
        }
      );
    } else {
      let data = {
        name: this.form.value.name,
        description: this.form.value.description,
        updated_at: new Date(),
      };

      this.testimonioService.updateTestimonio(data).pipe(takeUntil(this.desub$))
      .subscribe(
        (data) => {
          console.log(data);
          Swal.fire(
            "Testimonio Editado!",
            "El testimonio fue editado éxitosamente",
            "success"
          );
        },
        (error) => {
          Swal.fire(
            "El testimonio no pudo ser Editado",
            error.messagge,
            "error"
          );
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.desub$.next();
    this.desub$.complete();
  }

}
