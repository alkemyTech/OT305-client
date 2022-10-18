import { ComponentFixture, fakeAsync, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { By } from "@angular/platform-browser";

import { FormCrearEditarMiembrosComponent } from "./form-crear-editar-miembros.component";

describe("FormCrearEditarMiembrosComponent", () => {
  let component: FormCrearEditarMiembrosComponent;
  let fixture: ComponentFixture<FormCrearEditarMiembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCrearEditarMiembrosComponent],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCrearEditarMiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //Creacion correcta del componente (QUE EXISTA)
  it("should create", () => {
    expect(component).toBeTruthy();
  });

  //Se reliza la verificacion de un nuevo miembro, adicional que todos los campos se llenen correctamente
  it("should create new member", fakeAsync(() => {
    const testMember = {
      name: "nombre",
      image: "imagen",
      description: "description",
      facebookUrl: "facebook",
      linkedinUrl: "linkedin",
    };
    component.form.controls["name"].setValue(testMember.name);
    component.form.controls["image"].setValue(testMember.image);
    component.form.controls["description"].setValue(testMember.description);
    component.form.controls["facebookUrl"].setValue(testMember.facebookUrl);
    component.form.controls["linkedinUrl"].setValue(testMember.linkedinUrl);

    expect(component.form.value).toBeTruthy(testMember);
  }));
  // si no se llenan todos los campos, o el formulario es invalido
  it("invalid form error", () => {
    const fixture = TestBed.createComponent(FormCrearEditarMiembrosComponent);
    const member = fixture.componentInstance;
    fixture.detectChanges();

    const name = component.form.controls["name"];
    name.setValue("juan");
    expect(member.form.invalid).toBeTrue();
  });
});
