import { Component, OnInit } from '@angular/core';
import { EmpService } from 'src/app/services/emp.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css']
})
export class ListempComponent implements OnInit {

  employees : any;
  constructor(private __emp: EmpService) { }

  ngOnInit(): void {
    this.__emp.getAll()
    .subscribe(
      (res)=>{
        this.employees = res
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  delete(id :any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.__emp.deleteEmp(id)
          .subscribe(
            (res)=>{
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              this.ngOnInit()
            },
            (err)=>{
              console.log(err)
            }
          )

      }
    })
  }
}
