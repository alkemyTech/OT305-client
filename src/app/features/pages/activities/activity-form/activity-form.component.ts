import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ActividadService } from "src/app/core/services/activities/actividad.service";
import { AlertasComponent } from "src/app/shared/components/alertas/alertas.component";
@Component({
  selector: "app-activity-form",
  templateUrl: "./activity-form.component.html",
  styleUrls: ["./activity-form.component.scss"],
})
export class ActivityFormComponent implements OnDestroy {
  private desub$ = new Subject<void>();
  @Input() actividad: any;
  accion: string;
  form: FormGroup;
  foto: any;
  loanding: boolean = true;

  constructor(
    private fb: FormBuilder,
    private actividadService: ActividadService,
    public dialog: MatDialog
  ) {
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

    this.cambiarModo();
  }

  onSubmit() {
    this.cambiarModo();
    if (this.accion === "Agregar") {
      this.crearActividad();
    } else {
      this.actualizarActividad();
    }
  }

  // Alerta

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

  //petición POST al endpoint de creación de Novedades (/activities/create).

  crearActividad() {
    let data = {
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
    };

    this.actividadService
      .setActividad(data)
      .pipe(takeUntil(this.desub$))
      .subscribe(
        () => {
          this.openDialog(
            "Actividad Agregada!",
            "La actividad fue agregada éxitosamente"
          );
          this.foto = undefined;
          this.form.controls["image"].setValue(null);
          this.form.controls["name"].setValue("");
          this.form.controls["description"].setValue("");
          this.cambiarModo();
        },
        (error) => {
          this.openDialog("La Actividad no pudo ser Agregada", "Por favor, complete todos los campos");
          this.cambiarModo();
        }
      );
  }

  //petición PATCH al endpoint de actualización del server (/activities/:id).

  actualizarActividad() {
    if (this.form.value.image === null) {
      let actividad = {
        id: this.actividad.id,
        name: this.form.value.name,
        description: this.form.value.description,
        image: this.form.value.image,
        updated_at: new Date(),
      };
      this.actividadService
        .updateActividad(actividad)
        .pipe(takeUntil(this.desub$))
        .subscribe(
          () => {
            this.openDialog(
              "Actividad Editada!",
              "La actividad fue editada éxitosamente"
            );
            this.cambiarModo();
          },
          (error) => {
            this.openDialog("La Actividad no pudo ser Editada", "Por favor, complete todos los campos");
            this.cambiarModo();
          }
        );
    } else {
      let actividad = {
        id: this.actividad.id,
        name: this.form.value.name,
        description: this.form.value.description,
        updated_at: new Date(),
      };

      this.actividadService
        .updateActividad(actividad)
        .pipe(takeUntil(this.desub$))
        .subscribe(
          () => {
            this.openDialog(
              "Actividad Editada!",
              "La actividad fue editada éxitosamente"
            );
            this.cambiarModo();
          },
          (error) => {
            this.openDialog("La Actividad no pudo ser Editada", "Por favor, complete todos los campos");
            this.cambiarModo();
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

  ngOnDestroy(): void {
    this.desub$.next();
    this.desub$.complete();
  }

  cambiarModo() {
    this.loanding = !this.loanding;
  }
}
