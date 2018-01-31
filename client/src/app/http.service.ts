import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get('/pets')
  }

  create(newP){
    return this._http.post('/pets',newP)
  }

  getOne(id){
    return this._http.get(`/pets/${id}`)
  }

  update(pet){
    return this._http.patch(`/pets/${pet._id}`,pet)
  }
  // delete(id){
  //   console.log(id)
  //   return this._http.delete(`/pets/${id}`)
  // }





  
}
