import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseHttpService } from 'src/app/services/firebase-http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  formData:any = NgForm;
  imageSrc!:string;
 hide = true;
  @Output()
  formSubmitEmitter:EventEmitter<any> = new EventEmitter();

  @Input()
  formDefaultData:any[] = [];


  constructor(private router:Router,private firebaseClient:FirebaseHttpService) { }

  ngOnInit(): void {
    this.initFormDefaultData()
  }



   onCancelBtnClick(){
     this.router.navigate(['/']);
   }

   onFormSubmit(form:NgForm){
    this.formSubmitEmitter.emit(form.value)
    this.firebaseClient.AddCar(form.value)
    form.reset();
    this.router.navigate(['/']);
      
  
   }

   initFormDefaultData(){
    if(this.formDefaultData.length!=0){
      this.formDefaultData.forEach((carItem:any)=>{
        

      })
    }
   }

   onImageBtnClick(imageInp:any){
    imageInp.click()
  }

  onImageInpUpload(event:any) {
    let self = this;
    let reader = new FileReader();
    reader.addEventListener("load", function(){
      self.imageSrc = reader.result as string;
      self.formData.value.image = reader.result
    })
    reader.readAsDataURL(event.target.files[0])
  }

}


