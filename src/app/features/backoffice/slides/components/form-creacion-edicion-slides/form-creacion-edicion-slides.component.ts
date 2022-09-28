import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private slideService: SlidesService,
    private router: Router) {

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
    this.slideService.setSlideParaEditar(null);
  }

  obtenerSlide(){
    this.slide = this.slideService.getSlideParaEditar();
  }

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
    const base64 = btoa(image);

    this.form.get("name")?.setValue(name);
    this.form.get("description")?.setValue(description);
    this.form.get("order")?.setValue(order);
    this.form.get("image")?.setValue(base64);
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
      console.log("¡Slide creado con éxito!")
      return this.router.navigate(["/backoffice/slides"]);
    },
    error => {
      return console.log("Ha ocurrido un error durante la operación, vuelva a intentarlo")
    })
  }

  patchSlide(){
    this.httpService.patch(
      `https://ongapi.alkemy.org/api/slides/${this.slide.id}`,
      {
        id: this.slide.id,
        name: this.form.value.name,
        description: this.form.value.description,
        image: this.form.value.image,
        order: this.form.value.order,
        updated_at: new Date()
      },
      false
    ).subscribe(res =>{
      console.log(res);
      console.log("¡Slide editado con éxito!");
      return this.router.navigate(["/backoffice/slides"]);
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
