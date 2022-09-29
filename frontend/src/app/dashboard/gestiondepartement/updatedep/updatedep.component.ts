import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepService } from 'src/app/services/dep.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-updatedep',
  templateUrl: './updatedep.component.html',
  styleUrls: ['./updatedep.component.css']
})
export class UpdatedepComponent implements OnInit {

  id: any;
  departement : any;
  constructor( private act : ActivatedRoute, private _dep : DepService, private router : Router) { }

  ngOnInit(): void {
    /*1* Get the id to identify which dep we're going to update*/
    this.id=this.act.snapshot.paramMap.get('id')
    /*2* get departement data*/
    this._dep.getById(this.id)
      .subscribe(
        (res)=>{
          this.departement= res;
        },
        (err)=>{
          console.log(err)
        }
      )



  }
   /*3* save changes */
  update(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._dep.updateDep(this.id, this.departement)
        .subscribe(
          (res)=>{
            Swal.fire('Saved!', '', 'success')
            this.router.navigate(['/dashboard/gestiondepartement/list'])
          },
          (err)=>{
            console.log(err)
            Swal.fire('Changes are not saved, error occured', '', 'info')
          }
        )

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }
}
