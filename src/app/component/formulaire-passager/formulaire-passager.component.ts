import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDto } from 'src/app/models/trip-dto';
import { HeaderService } from 'src/app/service/header.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-formulaire-passager',
  templateUrl: './formulaire-passager.component.html',
  styleUrls: ['./formulaire-passager.component.css']
})
export class FormulairePassagerComponent implements OnInit {
  form!: FormGroup;
  titre:string="Journal de Bord (Passager)"
  trip !: TripDto

  constructor( private headerService: HeaderService, private route: Router, private fb: FormBuilder) {
    this.headerService.changeTitre(this.titre)
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      start: this.fb.control('', [Validators.required]),
      end : this.fb.control('',[Validators.required]),
      price: this.fb.control('', [Validators.required])
    })
  }

  get start(){
    return this.form.get("start")
  }

  get end(){
    return this.form.get("end")
  }

  get price(){
    return this.form.get("end")
  }


  submit(){
      if(this.form.valid){
          this.trip = this.form.value
          this.route.navigate(['/main'])
      }
  }
}