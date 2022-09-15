import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  formValue!: FormGroup;
  passwordPattern!: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$?¡-_]){1}$";

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.camposLogin();
  }
  camposLogin() {
    this.formValue = this.formBuilder.group({
      correo: ["", [Validators.required, Validators.email]],
      contrasena: [
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
    alert("login exitoso");
    console.log(this.formValue.value);
  }
  public get controls(): any {
    return this.formValue.controls;
  }
}
