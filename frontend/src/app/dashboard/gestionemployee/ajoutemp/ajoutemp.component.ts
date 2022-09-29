import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepService } from 'src/app/services/dep.service';
import { EmpService } from 'src/app/services/emp.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-ajoutemp',
  templateUrl: './ajoutemp.component.html',
  styleUrls: ['./ajoutemp.component.css']
})
export class AjoutempComponent implements OnInit {

  employee : any = {
    fullname: '',
    email:'',
    tel:'',
    address:'',
    idDep:''
  }
  
  image :any;
  departements : any;

  selectImage(e : any){
    this.image = e.target.files[0];
  }

  constructor(private _emp : EmpService, private router : Router, private _dep : DepService) { }

  ngOnInit(): void {
    this._dep.getAll()
      .subscribe(
        (res)=>{
          this.departements = res
        },
        (err)=>{
          console.log(err)
        }
      )
  }

  ajout(){
   let fd = new FormData();

   fd.append('fullname',this.employee.fullname)
   fd.append('email',this.employee.email)
   fd.append('tel',this.employee.tel)
   fd.append('address',this.employee.address)
   fd.append('idDep',this.employee.idDep)
   fd.append('image',this.image)

   this._emp.createEmp(fd)
    .subscribe(
      (res)=>{
        console.log(this.employee)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Employee has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/dashboard/gestionemployee/list'])
      },
      (err)=>{
        console.log(err)
      }
    )
  }

}
