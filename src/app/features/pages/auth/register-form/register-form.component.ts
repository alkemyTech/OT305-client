import { error } from "@angular/compiler/src/util";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import {
  Register_Request_Action,
  Register_Request_Error_Action,
  Register_Request_Success_Action,
} from "src/app/core/ngrx/actions/auth.action";
import { PrivateApiService } from "src/app/core/services/privateApi/private-api.service";
import { CustomValidators } from "src/app/core/validators/custom-validators";
import { AlertasComponent } from "src/app/shared/components/alertas/alertas.component";
import { DialogErrorComponent } from "src/app/shared/components/alertas/dialog-error/dialog-error/dialog-error.component";
import { ResponseComponent } from "src/app/shared/components/alertas/response.component";
import { TermsDialogComponent } from "src/app/shared/components/alertas/termsDialog/terms-dialog/terms-dialog.component";

interface registro {
  email: string;
  password: string;
}

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"],
})
export class RegisterFormComponent implements OnInit {
  passMismatch: boolean = false;
  aceptTerms: boolean = false;
  @ViewChild("terms", { static: true }) terms!: ElementRef;

  datosRegistro: registro = {
    email: "",
    password: "",
  };

  miFormulario: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.minLength(1), Validators.email]],
    password: [
      ,
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        CustomValidators.patternValidator(/\d/, { hasNumber: true }),
        CustomValidators.patternValidator(/[A-Za-z]/, { hasLetter: true }),
        CustomValidators.patternValidator(
          /[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/,
          { hasSpecialCharacters: true }
        ),
      ]),
    ],
    password2: [, [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private httpService: PrivateApiService,
    private store: Store,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {}

  registrar() {
    if (this.miFormulario.invalid) {
      console.log("formulario no valido");
      return;
    }
    if (this.aceptTerms === false) {
      const dialogRef = this.dialog.open(ResponseComponent, {
        data: {
          message: "Lea y acepte terminos y condiciones para registrarse",
          title: "DEBE ACEPTAR TERMINOS Y CONDICIONES",
          type: "Error",
        },
      });
    }

    if (
      this.miFormulario.get("password")!.value !==
      this.miFormulario.get("password2")!.value
    ) {
      console.log("las pass no coinciden");
      this.passMismatch = true;
      return;
    } else {
      console.log("password indenticas");
      this.aceptTerms;
      this.passMismatch = false;
      this.datosRegistro.email = this.miFormulario.get("email")!.value;
      this.datosRegistro.password = this.miFormulario.get("password")!.value;
      console.log(this.datosRegistro);
      //comienza las peticiones con actions ngrx
      if(this.aceptTerms){
        this.store.dispatch(Register_Request_Action());
        this.httpService
          .simplePostRequest("register", this.datosRegistro)
          .subscribe(
            (res: any) => {
              if(res.data){
                this.store.dispatch(Register_Request_Success_Action());
                this.router.navigate(["/login"]);
                return console.log(res);
              }
              else{
                this.store.dispatch(Register_Request_Error_Action());
                this.dialog.open(DialogErrorComponent, {
                  width: "450px",
                  height: "335px",
                  data: {
                    message: "Algo salió mal, por favor revisa los datos y vuelve a intentarlo."
                  }
                })
                return console.log(res);
              }
            },
            (err: any) => {
              this.store.dispatch(Register_Request_Error_Action());
              this.dialog.open(DialogErrorComponent, {
                  width: "450px",
                  height: "335px",
                  data: {
                    message: "Algo salió mal, por favor espere un momento y vuelva a intentarlo."
                  }
                })
              return console.log(err);
            }
          );
      }
    }
  }
  public get controls(): any {
    return this.miFormulario.controls;
  }
  readTerms() {
    this.terms;
    this.openDialog("no acepto", "acepto", "terminos y condiciones");
  }

  openDialog(cancelText: string, confirmText: string, message: string): void {
    const dialogRef = this.dialog.open(TermsDialogComponent, {
      height: "90vh",
      width: "60%",
      data: {
        cancelText: cancelText,
        confirmText: confirmText,
        message: message,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.aceptTerms = result === "no acepto" || !result ? false : true;
    });
  }
}
