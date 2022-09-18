import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/core/validators/custom-validators';

interface registro {
  email: string;
  password: string;
}


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  passMismatch:boolean = false;

  datosRegistro: registro = {
    email: "",
    password: ""
  }


  miFormulario: FormGroup = this.fb.group({
    email: [ , [ Validators.required, Validators.minLength(1), Validators.email ] ],
    password: [ , Validators.compose([ Validators.required, Validators.minLength(6),
                                       CustomValidators.patternValidator(/\d/, { hasNumber: true }), 
                                       CustomValidators.patternValidator(/[A-Za-z]/, { hasLetter: true }),
                                       CustomValidators.patternValidator(/[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/, { hasSpecialCharacters: true } ) ]) ],
    password2: [ , [Validators.required, Validators.minLength(6)]]
  })



  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  registrar(){
    if(this.miFormulario.invalid){
      console.log('formulario no valido');
      return;
    }
    
    if(this.miFormulario.get('password')!.value !== this.miFormulario.get('password2')!.value){
      console.log('las pass no coinciden');
      this.passMismatch = true;
      return
    } else {
      console.log('password indenticas');
      this.passMismatch = false;
      this.datosRegistro.email = this.miFormulario.get('email')!.value ;
      this.datosRegistro.password = this.miFormulario.get('password')!.value;
      console.log(this.datosRegistro);
    }
  }
  public get controls(): any {
    return this.miFormulario.controls;
  }
}
