import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  pets;
  
 
   constructor(private _httpService: HttpService,
   private _router: Router) { }
   
 
   ngOnInit() {
     this.getAll();
   }
   getAll(){
     this._httpService.getAll().subscribe(data =>{
       console.log(data['data'])
       this.pets = data['data'];
       
     })
   }
   onDetail(id){
     this._router.navigateByUrl(`detail/${id}`)
   }
   onEdit(id){
     this._router.navigateByUrl(`edit/${id}`)
   }
  //  onDelete(id){
  //    this._httpService.delete(id).subscribe(data =>{
  //      console.log(id)
  //      this.getAll()
       
  //  })
//    this.getAll()
//  }
 
 }
 
