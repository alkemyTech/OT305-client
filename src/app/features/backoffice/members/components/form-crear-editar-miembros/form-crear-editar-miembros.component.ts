import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-crear-editar-miembros',
  templateUrl: './form-crear-editar-miembros.component.html',
  styleUrls: ['./form-crear-editar-miembros.component.scss']
})
export class FormCrearEditarMiembrosComponent implements OnInit {

  form: FormGroup;

  constructor(private fb:  FormBuilder) {

    const urlRegex = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

    this.form = this.fb.group({

      name: ["", [Validators.required, Validators.minLength(4)]],
      image: ["", Validators.required],
      description: ["", Validators.required],
      facebookUrl: ["", [Validators.required, Validators.pattern(urlRegex)]],
      linkedinUrl: ["", [Validators.required, Validators.pattern(urlRegex)]]

    })

  }

  ngOnInit(): void {
  }
  
  captureImage(event: any){
    const file = event.target.files[0];
    this.form.get("image")?.setValue(file);
  }

  submitForm(){
    console.log(this.form.value);
  }

  //getters

  get name(){
    return this.form.get("name");
  }

  get facebookUrl(){
    return this.form.get("facebookUrl");
  }

  get linkedinUrl(){
    return this.form.get("linkedinUrl");
  }
}
