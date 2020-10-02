import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private _router: Router, private _userService: UserService) {}

  ngOnInit(): void {}
  login() {
    if (!this.loginForm.valid) {
      console.log('Invalid Form');
    } else {
      this._userService
        .login(JSON.stringify(this.loginForm.value))
        .subscribe((data) => {
          console.log(data);
          this._router.navigate(['/welcome']);
        });
      // console.log(JSON.stringify(this.loginForm.value));
    }
  }
}
