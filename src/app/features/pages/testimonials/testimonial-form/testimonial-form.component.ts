import { Component, Input, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { TestimonioService } from "src/app/core/services/testimonials/testimonio.service";
import { ResponseComponent } from "src/app/shared/components/alertas/response.component";

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
  id: number;

  constructor(
    private fb: FormBuilder,
    private testimonioService: TestimonioService,
    public dialog: MatDialog,
    private aRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.aRoute.snapshot.params["id"];

    this.form = this.fb.group({
      image: [null, Validators.required],
      name: ["", [Validators.required, Validators.minLength(4)]],
      description: ["", Validators.required],
    });

    if (this.testimonio == null && this.id == undefined) {
      this.accion = "Agregar";
    } else {
      this.testimonioService.getTestimonioById(this.id)
        .pipe(takeUntil(this.desub$))
        .subscribe(
          ({ data }) => {
            this.testimonio = data;
            this.foto = data.image;
            this.form.controls["name"].setValue(data.name);
            this.form.controls["description"].setValue(data.description);
          },
          (error) =>
            this.openDialog(
              "Error al obtener actividad",
              "La actividad no pudo ser encontrada",
              "Error"
            )
        );
      
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
        this.openDialog(
          "Testimonio Agregado!",
          "El testimonio fue agregado éxitosamente",
          "Success"
        );
        this.router.navigate(["./testimonios"]);
      },
      (error) => {
        this.openDialog(
          "El testimonio no pudo ser Agregado",
          "Por favor, complete todos los campos obligatorios",
          "Error"
        );
      }
    );
  }

  actualizarTestimonio() {
    //petición PATCH al endpoint de actualización del server (/testimonials/:id).

    if (this.testimonio.image === this.foto) {
      let data = {
        id: this.testimonio.id,
        name: this.form.value.name,
        description: this.form.value.description,
        updated_at: new Date(),
      };

      this.testimonioService.updateTestimonio(data).pipe(takeUntil(this.desub$))
      .subscribe(
        (data) => {
          this.openDialog(
            "Testimonio Editado!",
            "El testimonio fue editado éxitosamente",
            "Success"
          );
          this.router.navigate(["backoffice/testimonials"]);
        },
        ({error}) => {
          console.log(error)
          this.openDialog(
            "El testimonio no pudo ser Editado",
            error.message,
            "Error"
          );
        }
      );
    } else {
      let data = {
        id: this.testimonio.id,
        name: this.form.value.name,
        description: this.form.value.description,
        image: this.foto,
        updated_at: new Date(),
      };

      this.testimonioService.updateTestimonio(data).pipe(takeUntil(this.desub$))
      .subscribe(
        (data) => {
          this.openDialog(
            "Testimonio Editado!",
            "El testimonio fue editado éxitosamente",
            "Success"
          );
          this.router.navigate(["backoffice/testimonials"]);
        },
        (error) => {
          this.openDialog(
            "El testimonio no pudo ser Editado",
            "Por favor, complete todos los campos obligatorios",
            "Error"
          );
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.desub$.next();
    this.desub$.complete();
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
}
