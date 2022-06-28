import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FirebaseHttpService } from 'src/app/services/firebase-http.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  formDefaultData:any[] = [];
  key:string ="";
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private firebaseClient:FirebaseHttpService) { }
 

  ngOnInit(): void { 
    //როუტში გატანებული ქის ამოღება
      this.activatedRoute.params.subscribe((params:Params)=>{
        var key = params["key"];
        this.firebaseClient.GetCarByKey(key).subscribe((response:any) =>{
          console.log(response)
          this.formDefaultData = response;
        })
      })
    
  }


  onCancelBtnClick(){
    this.router.navigate(['/'])
  }

  onUpdateFormSubit(data:any){
    console.log(data)
    this.firebaseClient.updateCar(this.key,data).then((response:any)=>{
      // console.log(response);
      this.router.navigate(['/']);
    });
  }
  
 
}


