import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepService } from 'src/app/services/dep.service';
import { EmpService } from 'src/app/services/emp.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.css']
})
export class UpdateempComponent implements OnInit {

  departements : any;
  employee : any;
  id:any;
  image : any;
  constructor(private _dep: DepService, private act : ActivatedRoute, private _emp: EmpService, private router: Router) { }

  ngOnInit(): void {
    this._dep.getAll()
      .subscribe(
        (res)=>{
          this.departements=res
        },
        (err)=>{
          console.log(err);

        }
      )

    this.id= this.act.snapshot.paramMap.get('id')
    this._emp.getById(this.id)
        .subscribe(
          (res)=>{
            this.employee=res
          },(err)=>{
            console.log(err);

          }
        )
  }
 selectImage(e: any){
  this.image = e.target.files[0];
 }
 update(){
  let fd = new FormData();

   fd.append('fullname',this.employee.fullname)
   fd.append('email',this.employee.email)
   fd.append('tel',this.employee.tel)
   fd.append('address',this.employee.address)
   fd.append('idDep',this.employee.idDep)

   if (this.image){
    fd.append('image',this.image)
   }
    else {
    fd.append('image',this.employee.image)
   }

   Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this._emp.updateEmp(this.id, fd)
        .subscribe(
          (res)=>{
            Swal.fire('Saved!', '', 'success')
            this.router.navigate(['/dashboard/gestionemployee/list'])
          },
          (err)=>{
            console.log(err);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<a href="">Why do I have this issue?</a>'
            })
          }
        )

    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
    else {
      this.router.navigate(['/dashboard/gestionemployee/list'])
    }
  })

 }
}
