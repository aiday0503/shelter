import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  errors;
  pet;
  petid;

 
  
  constructor(private _httpService: HttpService, private _getIdRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._getIdRoute.params.subscribe(data=>{
      console.log(data.id);
      this.petid = data.id;
     
     })
     this._httpService.getOne(this.petid).subscribe(data=>{
      this.pet = data['data'];
      console.log(this.pet)   
  })
  
  }
  
  onLike(pet){
    pet.like +=1;
    this._httpService.update(this.pet).subscribe(data => {
      console.log(data);
    })
  }
  
  onAdopt(){
  
  }
}

  
