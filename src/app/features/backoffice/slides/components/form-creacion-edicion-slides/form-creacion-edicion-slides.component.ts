import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-creacion-edicion-slides',
  templateUrl: './form-creacion-edicion-slides.component.html',
  styleUrls: ['./form-creacion-edicion-slides.component.scss']
})
export class FormCreacionEdicionSlidesComponent implements OnInit {

  @Input() slide!: any;

  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      description: ["", [Validators.required]],
      order: ["", [Validators.required]],
      image: ["", [Validators.required]]
    })

  }
  
  ngOnInit(): void {
  }

  verificarSiHaySlide(){
    
    if( this.slide.id ){
      this.setValuesInForm();
    }

    else{
      
    }

  }

  setValuesInForm(){
    const name = this.slide.name;
    const description = this.slide.description;
    const order = this.slide.order;
    const image = this.slide.image;

    this.form.get("name")?.setValue(name);
    this.form.get("description")?.setValue(description);
    this.form.get("order")?.setValue(order);
    this.form.get("image")?.setValue(image);
  }
}
