import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepService {

  url = 'http://127.0.0.1:3000/departement/'
  constructor( private http: HttpClient) { }

  createDep( dep: any) {
    return this.http.post(this.url + 'ajout', dep)
  }

  getAll() {
    return this.http.get(this.url + 'all')
  }

  getById( id :any ){
    return this.http.get( this.url + 'getbyid/' + id)
  }

  deleteDep(id : any ) {
    return this.http.delete( this.url + 'delete/' + id)
  }
  updateDep(id : any, dep : any){
    return this.http.put( this.url + 'update/' + id, dep)
  }
}
