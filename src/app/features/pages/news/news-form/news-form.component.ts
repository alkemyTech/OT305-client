import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Categoria } from 'src/app/core/models/categoria.models';
import { HttpService } from 'src/app/core/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent{
  @Input() novedad: any;
  accion!:string
  form!:FormGroup
  foto!:any 
  categorias: Categoria  [] = []
  categoria: Categoria = new Categoria
 
  constructor(public fb : FormBuilder, private http: HttpService) {
    
    this.form = this.fb.group({
      titulo: ["", Validators.required, Validators.minLength(4)],
      image: ["", Validators.required],
      contenido: ["", Validators.required],
      categoria: ["", Validators.required]
    });
     
    if(this.novedad == null){
      this.accion = "Agregar";
      
    }else {
      
      this.foto = this.novedad.image;
      this.form.controls["titulo"].setValue(this.novedad.titulo);
      this.form.controls["categoria"].setValue(this.novedad.categoria)
      this.form.controls["contenido"].setValue(this.novedad.contenido);
      this.accion = "Editar"
      
      
    }
    this.form.valueChanges.subscribe(() => {
      this.form.value.image = this.foto;
    });
    this.getCategoria()
  }

  getCategoria(){
    // petecion get al enpoint de categoria para el input categoria
    this.http.get( 'https://ongapi.alkemy.org/api/categories').subscribe(
      (res: any) => {
        for(let req of res.data){
            this.categoria = req
            this.categorias.push(this.categoria)
        }
        }
    );
  }

  submitNovedad() {
    if(this.accion = "Agregar"){

      this.http.post('https://ongapi.alkemy.org/api/news', {
        id: 0,
        name: this.form.value.titulo,
        slug: "",
        content: this.form.value.contenido,
        image: this.form.value.image,
        user_id: null,
        category_id:  this.form.value.categoria = this.categoria.id,
        created_at: new Date(),
        updated_at: "",
        deleted_at: null,
        group_id: null
  
      }, false).subscribe(()=>{
        Swal.fire(
          "Novedad Agregada!",
          "La novedad fue agregada éxitosamente",
          "success"
          
        );
      
        this.foto = null;
        this.form.controls["titulo"].setValue("");
        this.form.controls["image"].setValue(null);
        this.form.controls["categoria"].setValue("");
        this.form.controls["contenido"].setValue("");
        
      },
      (error) => {
        Swal.fire(
          "La novedad no pudo ser Agregada",
          error.messagge,
          "error"
        );
      })
    }
    else{
      if (this.form.value.image === null) {
        this.http
          .patch(
            `https://ongapi.alkemy.org/api/news/${this.novedad.id}`,
            {
              name: this.form.value.titulo,
              content: this.form.value.contenido,
              category_id: this.form.value.categoria = this.categoria.id,
              image: this.form.value.image,
              updated_at: new Date(),
            },
            false
          ).subscribe((res) => {
            console.log(res);
            Swal.fire(
              "Novedad Editada!",
              "La novedad fue editada éxitosamente",
              "success"
            );
          },
          (error) => {
            Swal.fire(
              "La novedad no pudo ser Editada",
              error.messagge,
              "error"
            );
          }
        );
      }else{
  
      this.http
        .patch(
          `https://ongapi.alkemy.org/api/news/${this.novedad.id}`,
          {
            name: this.form.value.titulo,
            content: this.form.value.contenido,
            category_id: this.form.value.categoria = this.categoria.id,
            updated_at: new Date(),
          },
          false
        )
        .subscribe(
          (res) => {
            console.log(res);
            Swal.fire(
              "Novedad Editada!",
              "La novedad fue editada éxitosamente",
              "success"
            );
          },
          (error) => {
            Swal.fire(
              "La novedad no pudo ser Editada",
              error.messagge,
              "error"
            );
          }
        );
      }
  
    }
}


  onFileSelect(input: any) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = (e: any) => {
        this.foto = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}
