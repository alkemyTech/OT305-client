import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import {
  Login_Request_Action,
  Login_Request_Error_Action,
  Login_Request_Success_Action,
} from "src/app/core/ngrx/actions/auth.action";
import { PrivateApiService } from "src/app/core/services/privateApi/private-api.service";

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
    private store: Store
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
        this.store.dispatch(Login_Request_Success_Action({ data: res.data }));
        //quitar window.location.reload() cuando se adapte el ruteo
        window.location.reload();
        this.token = res.data.token;
        this.rol = res.data.user.role_id;
        localStorage.setItem("rol", this.rol);
        localStorage.setItem("token", this.token);
        console.log("login exitoso");
        return console.log(this.formValue.value);
      },
      (err: any) => {
        this.store.dispatch(Login_Request_Error_Action());
        return console.log(err);
      }
    );
  }
  public get controls(): any {
    return this.formValue.controls;
  }
}
