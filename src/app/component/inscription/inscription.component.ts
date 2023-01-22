import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Driver } from 'src/app/models/driver';
import { Passenger } from 'src/app/models/passenger';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  form!: FormGroup;
  titre: string = "Inscription sur Uber"
  passager !: Passenger
  conducteur !: Driver
  constructor( private headerService : HeaderService,private fb : FormBuilder, private route : Router,) {
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

  submit(){
    if(this.form.valid){

      if(this.form.value.type == "passager" ){
         this.passager = this.form.value
         this.route.navigate(['/acceuil'])
      } else{
          this.conducteur =  this.form.value
          this.route.navigate(['/accueil'])
      }
    }
  }
}
