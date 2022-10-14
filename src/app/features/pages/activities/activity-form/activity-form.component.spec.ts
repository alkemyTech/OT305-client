import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivityFormComponent } from "./activity-form.component";
import { RouterTestingModule } from "@angular/router/testing";
import { MatDialogModule } from "@angular/material/dialog";
import { CKEditorModule } from "ckeditor4-angular";
import { By } from "@angular/platform-browser";

describe("ActivityFormComponent", () => {
  let component: ActivityFormComponent;
  let fixture: ComponentFixture<ActivityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule,
        CKEditorModule,
      ],
      declarations: [ActivityFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // la renderización del formulario de actualización o creación debe ser según la URL actual 
  // (si se envía el identificador de una actividad por parámetro o no).

  it("No debe hacer submit", () => {
    // Si el formulario no está completo se deshabilitará el botón de submit 
    fixture.detectChanges(); 
    const name = component.form.controls['name']
    name.setValue(null)

    const button = fixture.debugElement.query(By.css('.btn')); 
    expect ( button.nativeElement.disabled ).toEqual(component.form.invalid); 
  });

  // Si los campos se completaron, se deberá testear la correcta petición HTTP al endpoint de 
  // creación o actualización (POST /activities o PATCH /activities/:id), y los mensajes de error y 
  // éxito correspondientes en base al resultado de la petición.

  it("Debe realizar una peticion al endpoint de creación", () => {
    expect(true).toBeTruthy();
  });

  it("Debe realizar una peticion al endpoint de actualizacón", () => {
    expect(true).toBeTruthy();
  });

  it("Debe mostrar mensaje de error", () => {
    expect(true).toBeTruthy();
  });

  it("Debe mostrar mensaje de éxito", () => {
    expect(true).toBeTruthy();
  });
});
