import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required]),
    confirm_password: new FormControl(null, [Validators.required]),
  });

  constructor(private _router: Router, private _userService: UserService) {} //6

  ngOnInit(): void {}

  // moveToWelcome() {
  //   this._router.navigate(['/welcome']);
  // }

  register() {
    if (
      !this.registerForm.valid ||
      this.registerForm.controls.password.value !==
        this.registerForm.controls.confirm_password.value
    ) {
      console.log('Invalid Form');
    } else {
      //7
      this._userService
        .register(JSON.stringify(this.registerForm.value))
        .subscribe((data) => {
          console.log(data);
          this._router.navigate(['/success']);
        });
    }
  }
}
