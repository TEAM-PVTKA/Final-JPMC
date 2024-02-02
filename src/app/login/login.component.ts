import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private vm:Router){}
  uname :any;
  pwd : any;
  user : any;
  
  Logincheck(){
    if(this.uname !== null && this.pwd == '0000'){
      this.vm.navigateByUrl('/navbar');
    }
    else{
      alert('Incorrect Password or Username')
    }
  }

  login(){
    
  }

}
