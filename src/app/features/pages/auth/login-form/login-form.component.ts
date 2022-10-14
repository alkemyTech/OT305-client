import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import {
  Login_Request_Action,
  Login_Request_Error_Action,
  Login_Request_Success_Action,
} from "src/app/core/ngrx/actions/auth.action";
import { PrivateApiService } from "src/app/core/services/privateApi/private-api.service";
import { DialogErrorComponent } from "src/app/shared/components/alertas/dialog-error/dialog-error/dialog-error.component";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  formValue!: FormGroup;
  passwordPattern!: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$?¡-_]){1}$";
  public token: any;
  public rol: any;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: PrivateApiService,
    private store: Store,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.camposLogin();
  }
  camposLogin() {
    this.formValue = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(this.passwordPattern),
        ],
      ],
    });
  }
  loginSubmit() {
    console.log(this.formValue);
    if (this.formValue.invalid) {
      Object.values(this.formValue.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    }
    //comienza ngrx
    this.store.dispatch(Login_Request_Action());
    this.httpService.simplePostRequest("login", this.formValue.value).subscribe(
      (res: any) => {
        if(res.data){
          this.store.dispatch(Login_Request_Success_Action({ data: res.data }));
          this.token = res.data.token;
          this.rol = res.data.user.role_id;
          localStorage.setItem("rol", this.rol);
          localStorage.setItem("token", this.token);
          console.log("login exitoso");
          return this.router.navigate(["/backoffice/dashboard"]);;
        }
        else{
          this.store.dispatch(Login_Request_Error_Action());
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
        this.store.dispatch(Login_Request_Error_Action());
        this.dialog.open(DialogErrorComponent, {
          width: "450px",
          height: "300px",
          data: {
            message: "Algo salió mal, por favor vuelva a intentarlo."
          }
        })
        return console.log(err);
      }
    );
  }
  public get controls(): any {
    return this.formValue.controls;
  }
}
