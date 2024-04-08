import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
})
export class UserAuthModule {}