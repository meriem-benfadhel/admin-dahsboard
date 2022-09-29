import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin = {
    email:'',
    password:''
  }
  token: any;
  constructor(private _auth: AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this._auth.login( this.admin )
      .subscribe(
        {
          next: (res)=>{
            this.token=res
            /*********************************** */
            /*******LOCAL STORAGE */
            localStorage.setItem('token', this.token.myToken)
            this.router.navigate(['/dashboard'])

          },
          error: (err)=>{
            console.log(err)
            Swal.fire({
              icon: 'error',
              title: 'Login Failed',
              text: 'email or password invalid',

            })
          }
        }
      )
  }

}
