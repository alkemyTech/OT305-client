import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Register_Request_Action, Register_Request_Error_Action, Register_Request_Success_Action } from 'src/app/core/ngrx/actions/auth.action';
import { PrivateApiService } from 'src/app/core/services/privateApi/private-api.service';
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



  constructor(
    private fb:FormBuilder,
    private httpService: PrivateApiService,
    private store: Store
    ) { }

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
      //comienza las peticiones con actions ngrx
      this.store.dispatch(Register_Request_Action());
      this.httpService.simplePostRequest("register", this.datosRegistro)
        .subscribe(
          (res: any) => {
            this.store.dispatch(Register_Request_Success_Action());
            return console.log(res);
          },
          (err: any) => {
            this.store.dispatch(Register_Request_Error_Action());
            return console.log(err);
          })
    }
  }
  public get controls(): any {
    return this.miFormulario.controls;
  }
}
