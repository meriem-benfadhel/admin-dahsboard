import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url ='http://127.0.0.1:3000/client/'
  constructor(private http: HttpClient) { }
  
  CreateClient( cl : any){
    return this.http.post(this.url + 'ajout' , cl)
  }

  getAll(){
    return this.http.get(this.url + 'all')
  }

  getById(id : any){
    return this.http.get(this.url + 'getbyid/' + id)
  }

  deleteClient(id : any){
    return this.http.delete(this.url + 'delete/' + id )
  }

  updateClient(id : any, cl : any){
    return this.http.put( this.url + 'update/' + id, cl)
  }
}
