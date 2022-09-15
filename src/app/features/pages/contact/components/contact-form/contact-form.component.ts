import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;
  
  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.min(10000000)]],
      message: ["", Validators.required]
    })

  }

  ngOnInit(): void {
  }

  sendForm(){
    
    if(this.form.valid){
      console.log(this.form.value); //Acá se realizaría el envío del email
    }
    else{
      alert("¡Por favor rellena los campos!") // Acá se puede agregar tanto alertas personalizadas como otro tipo de mensajes para dar un feedback al usuario
    }
  }

}
