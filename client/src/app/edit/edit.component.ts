import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  errors;
  
  pet ={
    id: "",
    name: "",
    type: "",
    description: "",
    skill1: "",
    skill2: "",
    skill3: "",
    like: 0,
  }

  constructor(private _httpService:HttpService,
  private _router:Router, private _activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedroute.params.subscribe(data=>{
      console.log(data);
      this.pet.id = data['id'];
      this._httpService.getOne(this.pet.id).subscribe(data => {
        console.log(data);
        this.pet = data['data'][0];
        console.log(this.pet)
      })
    })

    
  }
  
  onUpdate(id){
    this._httpService.update(this.pet).subscribe(data => {
      this._router.navigateByUrl('')
    })
  }

}
