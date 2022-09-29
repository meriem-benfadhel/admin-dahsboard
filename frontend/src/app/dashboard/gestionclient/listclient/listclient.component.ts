import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listclient',
  templateUrl: './listclient.component.html',
  styleUrls: ['./listclient.component.css']
})
export class ListclientComponent implements OnInit {

  clients : any;
  constructor(private __client : ClientService) { }

  ngOnInit(): void {
    this.__client.getAll()
      .subscribe(
        (res)=> {
          this.clients = res

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
        this.__client.deleteClient(id)
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
