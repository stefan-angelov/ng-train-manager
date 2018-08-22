import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';

import { RegisterService } from './services/register.service';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './containers/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [RegisterComponent],
  providers: [RegisterService]
})
export class RegisterModule { }
