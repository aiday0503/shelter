import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  errors;
  pets;

 pet ={
   name: "",
   type: "",
   description: "",
   skill1: "",
   skill2: "",
   skill3: "",
   like:""
 }
  constructor(private _httpService:HttpService,
  private _router: Router) { }

  ngOnInit() {
  }
  getAll(){
    this._httpService.getAll().subscribe(data =>{
      console.log(data)
      this.pets = data;
      
    })
  }
create(){
this._httpService.create(this.pet).subscribe(data =>{
  console.log( data);
if(data['err']){
  this.errors = data['err'];
  console.log(this.errors)
} else{
  this._router.navigateByUrl('')
}
})
}
}
