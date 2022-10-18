import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ActivityFormComponent } from "./activity-form.component";
import { RouterTestingModule } from "@angular/router/testing";
import { MatDialogModule } from "@angular/material/dialog";
import { CKEditorModule } from "ckeditor4-angular";
import { By } from "@angular/platform-browser";
import { ActividadService } from "src/app/core/services/activities/actividad.service";
import { Router } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

fdescribe("ActivityFormComponent", () => {
  let component: ActivityFormComponent;
  let fixture: ComponentFixture<ActivityFormComponent>;
  let service: ActividadService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        MatDialogModule,
        CKEditorModule,
        HttpClientModule,
      ],
      declarations: [ActivityFormComponent],
      providers: [ActividadService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFormComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ActividadService);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // la renderización del formulario de actualización o creación debe ser según la URL actual
  // (si se envía el identificador de una actividad por parámetro o no).

  it("Se debe renderizar el componente como Creación", () => {
    // Injecta el servicio de ruteo y redirecciona a la ruta para crear una nueva actividad.
    const router = TestBed.inject(Router);
    router.navigate(["/backoffice/activities/create"]);

    fixture.detectChanges();

    // Comprueba que la acción con la que se renderiza el componente sea igual a "Agregar".

    expect(component.accion).toEqual("Agregar");
  });

  it("Se debe renderizar el componente como Edición", () => {
    // Injecta el servicio de ruteo y redirecciona a la ruta para modificar una actividad.
    const router = TestBed.inject(Router);
    router.navigate(["/backoffice/activities/edit/2074"]);

    // Llama al método que configura el componente para realizar una modificación.
    component.confEdicion();
    fixture.detectChanges();

    // Comprueba que la acción con la que se renderiza el componente sea igual a "Editar".
    expect(component.accion).toEqual("Editar");
  });

  // Si el formulario no está completo se deshabilitará el botón de submit

  it("No debe hacer submit", () => {
    
    // Define uno de los campos del formulario de una menera que sea invalido

    const name = component.form.controls["name"];
    name.setValue(null);
    
    // Obtiene el botón para hacer submit

    const button = fixture.debugElement.query(By.css(".btn"));

    // Comprueba si el formulario es invalido

    let res = false;

    if (
      component.form.controls.name.status == "INVALID" ||
      component.foto == null
    )
      res = true;

    fixture.detectChanges();

    // Comprueba que el boton de submit este habilitado solo si el formulario es valido

    expect(button.nativeElement.disabled).toEqual(res);
  });

  // Si los campos se completaron, se deberá testear la correcta petición HTTP al endpoint de
  // creación o actualización (POST /activities o PATCH /activities/:id), y los mensajes de error y
  // éxito correspondientes en base al resultado de la petición.

  it("Debe realizar una peticion al endpoint de creación", (done) => {

    // Asignación de valores a los campos requeridos para que el formulario sea valido para 
    // subir una nueva actividad

    component.form.controls["name"].setValue("nombre de prueba");
    component.form.controls["description"].setValue("descripción de prueba");
    component.foto = img;

    // Definición de los datos a subir

    let data = {
      id: 0,
      name: component.form.value.name,
      slug: "",
      description: component.form.value.description,
      image: component.foto,
      user_id: 0,
      category_id: 0,
      created_at: new Date(),
      updated_at: null,
      deleted_at: null,
    };

    // Llamada al método post 

    service.setActividad(data).subscribe((data) => {
      expect(data.success).toBeTruthy();
      done();
    });

    fixture.detectChanges();
  });

  it("Debe realizar una peticion al endpoint de actualización", (done) => {

    // Asignación de valores a los campos requeridos para que el formulario sea valido para modificar una 
    // actividad 

    component.form.controls["name"].setValue("nombre de prueba");
    component.form.controls["description"].setValue("descripción de prueba");

    // Llamada al método put

    service
      .updateActividad({
        id: 2167,
        name: component.form.value.name,
        description: component.form.value.description,
        updated_at: new Date(),
      })
      .subscribe((data) => {
        expect(data.success).toBeTruthy();
        done();
      });

    fixture.detectChanges();
  });

  it("Debe mostrar mensaje de error", (done) => {

     // Define los campos del formulario de una menera que sea invalido

    component.form.controls["name"].setValue(null);
    component.form.controls["description"].setValue("descripción de prueba");

    // Llamada al método put

    service
      .updateActividad({
        id: 2167,
        name: component.form.value.name,
        description: component.form.value.description,
        updated_at: new Date(),
      })
      .subscribe(
        () => {},
        ({ error }) => {

          // Comprueba que el mensaje retornado coincida con el esperado

          expect(error.message).toBe("The given data was invalid.");
          done();
        }
      );

    fixture.detectChanges();
  });

  it("Debe mostrar mensaje de éxito", (done) => {

    // Define los campos del formulario de una menera que sea valido

    component.form.controls["name"].setValue("nombre de prueba");
    component.form.controls["description"].setValue("descripción de prueba");

     // Llamada al método put
     
    service
      .updateActividad({
        id: 2167,
        name: component.form.value.name,
        description: component.form.value.description,
        updated_at: new Date(),
      })
      .subscribe((data) => {
        // Comprueba que el mensaje retornado coincida con el esperado

        expect(data.message).toBe("Activity updated successfully");
        done();
      });

    fixture.detectChanges();
  });
});

// Definición de la imagen en base64 para realizar las pruebas

let img =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAJYCAYAAAHtcbLmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRDBBMjY3OTI2OTMxMUU0OUU2NkQ1MjA2NjBFQkNFNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRDBBMjY3QTI2OTMxMUU0OUU2NkQ1MjA2NjBFQkNFNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNEMEEyNjc3MjY5MzExRTQ5RTY2RDUyMDY2MEVCQ0U3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNEMEEyNjc4MjY5MzExRTQ5RTY2RDUyMDY2MEVCQ0U3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+CNUr4AAAHthJREFUeNrs3DsS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B1BVdkCAqlsU87j4gFmZjHki2SUEKswOCFBl+fXt91kGmLN8n9SmVLxT1kXLAVSJHRCgihbGHBQf0JelMU8lb1MNVIwdEKBq8hkH37EMMDD5rJy8m/hczGXLAYybHRCgSt+PDogPGIplMUdipi0FMG52QICquBLzrGUAgGazAwIAAAgQAACgebwECxilXZYAANrNDggAACBAgFrpWgLw/zuAAAFG5WTMJcsArfCWJQD60el2/SAD6PMbSafT++W2cvxwA5rnXMzLMec9dwAECAAAUAt+SgkAAAgQAABAgAAAAAgQAABAgAAAAAgQAABAgAAAAAIEAABAgAAAAAIEAABAgAAAAAIEAAAQIAAAAAIEAAAQIAAAAAIEAAAQIAAAgAABAAAQIAAAgAABAAAQIAAAgAABAAAECAAAgAABAAAECAAAgAABAAAECAAAIEAAAAAECAAAIEAAAAAECAAAIEAAAAAECAAAIEAAAAABAgAAIEAAAAABAgAAIEAAAAABAgAACBAAAAABAgAACBAAAAABAgAACBAAAECAAAAACBAAAECAAAAACBAAAECAAAAAAgQAAECAAAAAAgQAAECAAAAAAgQAABAgAAAAAgQAABAgAAAAAgQAABAgAAAAAgQAABAgAACAAAEAABAgAACAAAEAABAgAACAAAEAAAQIAACAAAEAAAQIAACAAAEAAAQIAAAgQAAAAAQIAAAgQAAAAAQIAAAgQAAAAAECAAAgQAAAAAECAAAgQAAAAAECAAAIEAAAAAECAAAIEAAAAAECAAAIEAAAAAECAAAIEAAAQIAAAAAIEAAAQIAAAAAIEAAAQIAAAAACBAAAQIAAAAACBAAAQIAAAAACBAAAECAAAAACBAAAECAAAAACBAAAECAAAIAAAQAAECAAAECt/QdkHmftzEA9iwAAAABJRU5ErkJggg==";
