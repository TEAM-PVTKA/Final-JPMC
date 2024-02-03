import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router, private dbservice: DatabaseService) {}
  // name: any;
  uname: any;
  pwd: any;
  email: any;
  user: any;
  details: any;
  userinfo: any;

  registerNow() {
    this.user = {
      "userName": this.uname,
      "password": this.pwd,
      "email": this.email,
    };
    this.dbservice.register(this.user).subscribe((res) => {
      alert(res);
    });
    this.router.navigateByUrl('/home');
    localStorage.setItem('loginuser', JSON.stringify(this.user));
    console.log('Signup');
  }

  loginCheck() {
    this.details = {
      "userName": this.uname,
      "password": this.pwd,
    };

    this.dbservice.login(this.details).subscribe((res) => {
      console.log(res);
      this.userinfo = res;
      if (
        this.userinfo.res == 'User not found' ||
        this.userinfo.res == 'Wrong Username or Password'
      ) {
        alert(this.userinfo.res);
      } else {
        if (this.userinfo.userName == 'admin') {
          alert('login success');
          this.router.navigateByUrl('/home');
          this.user = {
            "UserName": this.userinfo.userName,
            "Password": this.userinfo.password,
            "Email": this.userinfo.email,
          };
          localStorage.setItem('Loginuser', JSON.stringify(this.user));
        }
      }
    });
    //
    //
  }
}
