import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})
export class UpdateclientComponent implements OnInit {
  client : any ;
  id :any;
  newImage: any;
  constructor( private _client : ClientService, private act: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id= this.act.snapshot.paramMap.get('id');
    this._client.getById(this.id)
      .subscribe(
        (res)=>{
          this.client = res
        },
        (err)=>{

        }
      )

  }
  selectImage(e:  any){
    this.newImage= e.target.files[0]
  }

  update(){

    let fd =new FormData()
    fd.append('name',this.client.name)
    fd.append('description',this.client.description)
    fd.append('entreprise',this.client.entreprise)
    fd.append('titreprojet',this.client.titreprojet)

    if( this.newImage ){
      fd.append('image', this.newImage)
    }
    else {
      fd.append('image',this.client.image)
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
        this._client.updateClient(this.id, fd)
        .subscribe(
          (res)=>{
            Swal.fire('Saved!', '', 'success')
            this.router.navigate(['/dashboard/gestionclient/list'])
          },
          (err)=>{
            console.log(err)
          }
        )

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }


}
