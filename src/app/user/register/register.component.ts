import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  /*
  defining the form and its controls
  we want the user to provide their  own values
  so we don't pass any value to the form control instance
  */

  name = new FormControl('', [
    Validators.required, 
    Validators.minLength(3)
  ]);

  email = new FormControl('', [
    Validators.required, 
    Validators.email
  ]);

  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(120), //validates the number not the character length
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);

  confirm_password = new FormControl('', [
    Validators.required
  ]);

  phoneNumber = new FormControl('',[
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13)
  ]);

  /* 
    the formGroup is a subclass of of the AbstractControl
    
    angular annotates the form controls to abstractControl. thus the compiler passes an
    error an instance of the form control is passed on to the html through 
    property binding. 

    we can fix the problem in one of three ways
    1. do type assertion
    2. update the type in the input component
    3. move the properties arround

    3 >>> create the form controls are created as properties of the component class
    you can create the from controls outside of the formgroup and pass it to the formgroup via the
    THIS keyword 
     by doing this we can pass our form controls directly to the input component

  */
  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber,
  });


  register(){
    console.log('register called')
  }
}
 