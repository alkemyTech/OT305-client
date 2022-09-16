import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-editar-home',
  templateUrl: './form-editar-home.component.html',
  styleUrls: ['./form-editar-home.component.scss']
})
export class FormEditarHomeComponent implements OnInit {

  form: FormGroup;

  //acá almacenaremos los archivos de los inputs
  files: any = [];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      texto_bienvenida: ["", [Validators.required, Validators.minLength(20)]],
      slide1_imagen: [""],
      slide1_texto: [""],
      slide2_imagen: [""],
      slide2_texto: [""],
      slide3_imagen: [""],
      slide3_texto: [""]
    })

  }

  ngOnInit(): void {
  }

  //capturamos los archivos de los inputs y los añadimos al array "files"
  captureFiles(event: any){
    const file = event.target.files[0];
    this.files.push(file);
  }

  //al enviar el formulario, ejecutamos la funcion "setFilesInForm()" que seteará a los campos correspondientes del form los archivos que estan en el array "files"
  submitForm(){
    this.setFilesInForm();
    console.log(this.form.value); //acá implementaríamos la funcionalidad para enviar el form a la página inicio
  }

  //asignamos los valores a los campos del form, con los archivos que están en el array
  setFilesInForm(){
    this.form.get("slide1_imagen")?.setValue(this.files[0]);
    this.form.get("slide2_imagen")?.setValue(this.files[1]);
    this.form.get("slide3_imagen")?.setValue(this.files[2]);
  }

  //getter para ahorrar código en el HTML
  get texto_bienvenida(){
    return this.form.get("texto_bienvenida");
  }

}
