import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-ajoutclient',
  templateUrl: './ajoutclient.component.html',
  styleUrls: ['./ajoutclient.component.css']
})
export class AjoutclientComponent implements OnInit {

  client : any = {
    name :'',
    description:'',
    entreprise:'',
    titreprojet:''
  }
  image : any;

  constructor( private _cl : ClientService , private router : Router) { }

  ngOnInit(): void {
  }
  selectImage(e : any){
    this.image = e.target.files[0];
  }

  ajout(){
    let fd = new FormData()
    fd.append('name',this.client.name)
    fd.append('description',this.client.description)
    fd.append('entreprise',this.client.entreprise)
    fd.append('titreprojet',this.client.titreprojet)
    fd.append('image',this.image)

    this._cl.CreateClient(fd)
      .subscribe(
        (res)=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Client has been added succesfully',
            showConfirmButton: false,
            timer: 1500
          })
          this.client ={
            name :'',
            description:'',
            entreprise:'',
            titreprojet:'',
            image:''
          }
          this.router.navigate(['/dashboard/gestionclient/list'])
        },
        (err)=>{
          console.log(err)
        }
      )

  }
}
