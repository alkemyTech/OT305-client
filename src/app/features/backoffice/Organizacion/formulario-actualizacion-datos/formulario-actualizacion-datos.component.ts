import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-actualizacion-datos',
  templateUrl: './formulario-actualizacion-datos.component.html',
  styleUrls: ['./formulario-actualizacion-datos.component.scss']
})
export class FormularioActualizacionDatosComponent implements OnInit {
  @Input() organization: any;
  accion!:string
  form!:FormGroup
  logo!:any 
  constructor(public fb : FormBuilder) {
    this.accion="Actualizar"
    this.form = this.fb.group({
      name: ["", Validators.required],
      logo: ["", Validators.required],
      linksredessociales:[""],
      shortdescription: ["", Validators.required],
      longdescription: ["", Validators.required]
    });

    this.form = this.fb.group({
      name: ["", Validators.required],
      logo: ["", Validators.required],
      linksredessociales:[""],
      shortdescription: ["", Validators.required],
      longdescription: ["", Validators.required]
    });

    if(this.organization == null){
      this.accion = "Actualizar";
      
    }else {
      this.logo = this.organization.image;
      this.form.controls["name"].setValue(this.organization.name);
      this.form.controls["linksredessociales"].setValue(this.organization.linksredesociales)
      this.form.controls["longdescription"].setValue(this.organization.longdescription);
      this.form.controls["shortdescription"].setValue(this.organization.shortdescription);
      
    }
    this.form.valueChanges.subscribe(() => {
      this.form.value.logo = this.logo;
    });

  }

  ngOnInit() {
  }

  ActualizarOrganizacion(){}

  onFileSelect(input: any) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = (e: any) => {
        this.logo = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

}
