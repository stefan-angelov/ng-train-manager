import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  @Input() title = 'Auth';
  @Input() btnText = 'Auth';
  @Output() auth = new EventEmitter();
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup(
      {
        email: new FormControl(null, [Validators.email, Validators.required]),
        password: new FormControl(null, Validators.required)
      }
    )
  }

  onSubmit() {
    if (this.form.valid) {
      this.auth.emit(this.form.value);
    }
  }

  getEmailControl() {
    return this.form.get('email') as FormControl;
  }

  getPasswordControl() {
    return this.form.get('password') as FormControl;
  }
}
