import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


  signupForm: FormGroup;
  errorMessage?: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  ngOnInit() {
  }

  async onSubmit(): Promise<void> {
    const formValues = this.signupForm.value;
    const email = formValues['email'];
    const password = formValues['password'];

    try {
      await this.authService.signInUser(email, password);
      this.router.navigate(['/books']);
    } catch (error) {
      this.errorMessage = error;
    }
  }

}
