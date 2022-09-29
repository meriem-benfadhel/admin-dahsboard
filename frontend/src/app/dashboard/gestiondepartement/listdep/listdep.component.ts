import { Component, OnInit } from '@angular/core';
import { DepService } from 'src/app/services/dep.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listdep',
  templateUrl: './listdep.component.html',
  styleUrls: ['./listdep.component.css'],
})
export class ListdepComponent implements OnInit {
  departements: any;
  constructor(private _dep: DepService) {}

  ngOnInit(): void {
    this._dep.getAll().subscribe(
      (res) => {
        this.departements = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  delete(id: any) {
    //return
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this._dep.deleteDep(id).subscribe(
          (res) => {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            this.ngOnInit(); //to refresh the list
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }
}
