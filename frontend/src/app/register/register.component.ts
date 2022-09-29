import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  admin : any ={
    fullname:'',
    email:'',
    password:''
  }
  constructor(private _auth : AuthService, private router: Router) { }
  ngOnInit(): void {}
  register(){
    this._auth.register(this.admin)
      .subscribe(
        {
          next : (res)=>{
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your account has been created',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['/login'])
          },
          error: (err)=>{
            Swal.fire({
              icon: 'error',
              title: 'Error...',
              text: 'Email exist!',
            })
          }
        }
      )
   }
}
