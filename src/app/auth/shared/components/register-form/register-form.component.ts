import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Input() coutries = [];
  @Input() cities = [];
  @Output() searchCountry = new EventEmitter();
  @Output() searchCity = new EventEmitter();

  genderOptions = [
    {
      label: 'Male',
      value: 'male'
    },
    {
      label: 'Female',
      value: 'female'
    }
  ]

  form = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    repeatPassword: new FormControl(null, Validators.required),
    country: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required)
  })
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }

}
