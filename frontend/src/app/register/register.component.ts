import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  showLink: boolean = false
  constructor(
    private formBuilder: FormBuilder,
    private regService: RegistrationService
  ) {}

  registerForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    pid: [''],
  });

  onSubmit(): void {
    this.regService.register(this.registerForm.get('firstName')!.value, this.registerForm.get('lastName')!.value, this.registerForm.get('pid')!.value, null)
    console.warn('Your information has been submitted', this.registerForm.value);
    window.alert("Thank you, " + this.registerForm.get('firstName')!.value + " " + this.registerForm.get('lastName')!.value)
    this.registerForm.reset()
    this.showLink = true
    }

  

}
