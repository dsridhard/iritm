import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormControl, FormGroup } from '@angular/forms';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  {

  statucode: number = 400
  loginForm = new FormGroup({
    usernameOrEmail: new FormControl(''),
    password: new FormControl('')

  });

  constructor(private router: Router, private loginService: LoginService) { }



  LoginHandler() {
    this.loginService.Login(this.loginForm.value).subscribe((resData: any) => {
      console.log(resData)
      if (resData.statucode === 400) {
        //  alert("Please Enter Valid Username and Password")
        Swal.fire({
          title: "Login",
          text: "Please Enter Valid Username and Password",
          icon: "error"
        });
      } else {
        if (resData.roleId == 4) {
          localStorage.setItem('username', resData.username)
          localStorage.setItem('uname', resData.userfullname)
          localStorage.setItem('officertype', resData.officertype)
          localStorage.setItem('authID', resData.roleId);
          this.router.navigate(['userDashboard']);
        } else if (resData.roleId == 1) {
          localStorage.setItem('username', resData.username)
          localStorage.setItem('uname', resData.userfullname)
          localStorage.setItem('officertype', resData.officertype)
          this.router.navigate(['adminDashboard']);
        } else {
          // alert("Please Enter Valid Username and Password")
          Swal.fire({
            title: "Login",
            text: "Please Enter Valid Username and Password",
            icon: "error"
          });
        }
      }







    })



  }

}


