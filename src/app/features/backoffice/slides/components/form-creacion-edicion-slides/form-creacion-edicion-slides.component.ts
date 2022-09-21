import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-form-creacion-edicion-slides',
  templateUrl: './form-creacion-edicion-slides.component.html',
  styleUrls: ['./form-creacion-edicion-slides.component.scss']
})
export class FormCreacionEdicionSlidesComponent implements OnInit {

  @Input() slide: any = null;

  form: FormGroup;

  constructor(private fb: FormBuilder, private httpService: HttpService) {

    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      description: ["", [Validators.required]],
      order: ["", [Validators.required]],
      image: ["", [Validators.required]]
    })
    this.verificarSiHaySlide();
  }
  
  ngOnInit(): void { }

  verificarSiHaySlide(){
    
    if( this.slide !== null ){
      this.setValuesInForm();
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

  submitForm(){
    if( this.slide.id ){
      this.patchSlide();
    }
    else{
      this.postSlide();
    }
  }

  postSlide(){
    this.httpService.post(
      "https://ongapi.alkemy.org/api/slides",
      {
        id: 0,
        name: this.form.value.name,
        description: this.form.value.description,
        image: this.form.value.image,
        order: this.form.value.order,
        user_id: 0,
        created_at: new Date(),
        updated_at: null,
        deleted_at: null
      },
      false
    ).subscribe(res => {
      return console.log("¡Slide creado con éxito!");
    })
  }

  patchSlide(){
    this.httpService.patch(
      `https://ongapi.alkemy.org/api/slides/${this.slide.id}`,
      {
        name: this.form.value.name,
        description: this.form.value.description,
        image: this.form.value.image,
        order: this.form.value.order,
        updated_at: new Date()
      },
      false
    ).subscribe(res =>{
      return console.log("¡Slide editado con éxito!");
    })
  }

  capturarImagen(event: any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.form.get("image")?.setValue(reader.result);
    }
  }

}
