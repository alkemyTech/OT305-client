import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-subscripcion',
  templateUrl: './formulario-subscripcion.component.html',
  styleUrls: ['./formulario-subscripcion.component.scss']
})
export class FormularioSubscripcionComponent implements OnInit {
  constructor(private fb : FormBuilder) { 

    this.title = 'Subscribirse a Newslleter'
    this.isLoading = true

  }

  FormSubscribe: FormGroup =   this.fb.group({
    email : new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  })
  title!: string
  isLoading!: boolean

  ngOnInit() {}

  Subscribirse(){
    const email = this.FormSubscribe.get('email')?.value
    if(email != "" && this.FormSubscribe.valid){
      localStorage.setItem("Email", email)
      this.isLoading = false
    }
  }
}
