import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';
import { SlidesService } from 'src/app/core/services/slides/slides.service';

@Component({
  selector: 'app-form-creacion-edicion-slides',
  templateUrl: './form-creacion-edicion-slides.component.html',
  styleUrls: ['./form-creacion-edicion-slides.component.scss']
})
export class FormCreacionEdicionSlidesComponent implements OnInit, OnDestroy{

  @Input() slide: any = null;

  form: FormGroup;

  constructor(private fb: FormBuilder, private httpService: HttpService, private slideService: SlidesService) {

    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      description: ["", [Validators.required]],
      order: ["", [Validators.required]],
      image: ["", [Validators.required]]
    })
    this.obtenerSlide();
    this.verificarSiHaySlide();
  }
  
  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.slide = null;
  }

  obtenerSlide(){
    this.slide = this.slideService.getSlideParaEditar();
    console.log(this.slide);
  }

  verificarSiHaySlide(){
    console.log("entra a veri")
    if( this.slide !== null ){
      console.log("llega hassta verificar")
      this.setValuesInForm();
    }

  }

  setValuesInForm(){
    console.log("llega a setear value in form")
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
    if( this.slide !== null ){
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
    },
    error => {
      return console.log("Ha ocurrido un error durante la operación, vuelva a intentarlo")
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
    },
    error => {
      return console.log("Ha ocurrido un error durante la operación, vuelva a intentarlo")
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
