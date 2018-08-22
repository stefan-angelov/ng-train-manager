import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSqUiModule } from '@sq-ui/ng-sq-ui';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSqUiModule
  ],
  declarations: [AuthFormComponent, RegisterFormComponent],
  exports: [AuthFormComponent, RegisterFormComponent]
})
export class SharedModule { }
