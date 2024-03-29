import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDto } from 'src/app/models/trip-dto';
import { HeaderService } from 'src/app/service/header.service';
import { HttpService } from 'src/app/service/http.service';
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
  data!: any

  constructor( private headerService: HeaderService, private route: Router, private fb: FormBuilder, private httpClient: HttpService,private storageService:StorageService) {
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
    return this.form.get("price")
  }


  submit(){
      if(this.form.valid){
        this.data =  this.storageService.getId()
          this.trip = {
            addressStart: this.form.value.start,
            addressEnd: this.form.value.end,
            price: this.form.value.price,
            passenger:parseInt(this.data),
            driver: 0,
            state:"CREATED"
          }
          this.httpClient.createTrip(this.trip).subscribe(x=>{
            console.log(x)
          })
          this.route.navigate(['/main'])
      }
  }
}
