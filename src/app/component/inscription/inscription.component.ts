import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Driver } from 'src/app/models/driver';
import { DriverDTO } from 'src/app/models/driver-dto';
import { Passenger } from 'src/app/models/passenger';
import { PassengerDTO } from 'src/app/models/passenger-dto';
import { HeaderService } from 'src/app/service/header.service';
import { HttpService } from 'src/app/service/http.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  form!: FormGroup;
  titre: string = "Inscription sur Uber"
  passager !: PassengerDTO
  data : any = null
  conducteur !: DriverDTO
  isExist : boolean = false
  constructor( private headerService : HeaderService,private fb : FormBuilder, private route : Router, private http : HttpService, private storageService : StorageService) {
    this.headerService.changeTitre(this.titre)

   }



  ngOnInit(): void {

    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.pattern("^([a-z]*)\@([a-z]{2,10})\.(fr|com)$")]),
      type : this.fb.control('',[Validators.required]),
      voiture: this.fb.control('')
    })


  }

  get email(){
    return this.form.get("email")
  }

  get type(){

    return this.form.get("type")
  }

  get voiture(){
    return this.form.get("voiture")
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

  submit(){
    if(this.form.valid){

      if(this.form.value.type == "passager" ){
        this.getPassenger(this.form.value.email)
        this.data = this.storageService.getEmail();
        //console.log(this.data)
        if(this.data == null){
          this.passager =  {
            email : this.form.value.email
          }
          this.http.createPassager(this.passager).subscribe(x =>{
            console.log(x)
          })
          // console.log(this.passager)
          this.storageService.removeEmail()
           this.route.navigate(['/acceuil'])
        } else{
            this.isExist = true
        }

      } else{
          this.getDriver(this.form.value.email)
          this.data = this.storageService.getEmail()
          console.log(this.data)
          if(this.data == null){
            this.conducteur =  {
              email: this.form.value.email,
              car: this.form.value.voiture
            }
            this.http.createDriver(this.conducteur).subscribe(x=>{
              console.log(x)
            })

            // console.log(this.conducteur)
            this.storageService.removeEmail()
            this.route.navigate(['/acceuil'])
          } else {
            this.isExist = true
          }

      }
    }
  }
}
