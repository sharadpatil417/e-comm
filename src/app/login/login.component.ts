import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {}
  form = this.formBuilder.group({
    username: '',
    password: '',
  });

  ngOnInit(): void {}

  login() {
    console.log(this.form);
    if (this.form.status === 'VALID') {
      // this.loginService.login(this.form.value.username!, this.form.value.password!).subscribe((data)=> {
      //   console.log(data);

      // });
      this.route.navigate(['dashboard/'], {});
    }
  }
}
