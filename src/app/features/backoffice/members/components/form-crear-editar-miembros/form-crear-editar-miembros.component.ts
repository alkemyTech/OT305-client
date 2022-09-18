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

    this.form = this.fb.group({

      name: ["", Validators.required],
      image: ["", Validators.required],
      description: ["", Validators.required],
      link1: ["", Validators.required],
      link2: ["", Validators.required],
      link3: ["", Validators.required]

    })

  }

  ngOnInit(): void {
  }

}
