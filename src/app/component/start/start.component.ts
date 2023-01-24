import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/service/header.service';
import { HttpService } from 'src/app/service/http.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  form!: FormGroup;
  titre: string = "Bienvenue sur Uber"
  notExist: boolean = false
  data : any =""
  constructor(private fb : FormBuilder, private route : Router, private headerService : HeaderService, private storageService: StorageService, private http:HttpService) {
    this.headerService.changeTitre(this.titre)
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.pattern("^([a-z]*)\@([a-z]{2,10})\.(fr|com)$")]),
      type : this.fb.control('',[Validators.required])
    })
  }

  get email(){
    return this.form.get("email")
  }

  get type(){
    return this.form.get("type")
  }
  getPassenger(email:string){
    this.http.getPassagerByEmail(email).subscribe((passager)=>{

         this.storageService.setEmail(passager.email)
      })
  }

  getDriver(email:string){
    this.http.getDriverByEmail(email).subscribe((driver)=>{
      this.storageService.setEmail(driver.email)
    })
  }

  recoverPassengerId(email:string){
    this.http.getPassagerByEmail(email).subscribe((passager)=>{

      this.storageService.setId(passager.id)
   })
  }

  recoverDriverId(email:string){
    this.http.getDriverByEmail(email).subscribe((driver)=>{
      this.storageService.setId(driver.id)
   })
  }


  submit(){
    if(this.form.valid){
      if(this.form.value.type =="passager"){
        this.getPassenger(this.form.value.email)
        this.data = this.storageService.getEmail();
        console.log(this.data)
        if(this.data != null){
          this.storageService.set(this.form.value.type)
          this.recoverPassengerId(this.form.value.email)
          this.storageService.removeEmail()
          this.route.navigate(['/main'])
        } else{
          this.notExist =  true
        }
      } else {
        this.getDriver(this.form.value.email)
        this.data = this.storageService.getEmail()
        console.log(this.data)
        if(this.data !=  null){
          this.storageService.set(this.form.value.type)
          this.recoverDriverId(this.form.value.email)
          this.storageService.removeEmail()
          this.route.navigate(['/main'])
        } else{
          this.notExist =  true
        }
      }



    }
  }

}
