import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  url ="http://127.0.0.1:3000/employee/"
  constructor(private http : HttpClient) { }

  createEmp(emp: any){
    return this.http.post(this.url + 'ajout',emp)
  }
  getAll(){
    return this.http.get(this.url + 'all')
  }
  getById(id: any){
    return this.http.get(this.url + 'getbyid/' + id)
  }
  deleteEmp(id : any){
    return this.http.delete(this.url + 'delete/' + id)
  }
  updateEmp(id:any, newData : any){
    return this.http.put(this.url + 'update/' + id, newData)
  }

}
