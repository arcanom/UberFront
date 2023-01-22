import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  form!: FormGroup;
  titre: string = "Bienvenue sur Uber"


  constructor(private fb : FormBuilder, private route : Router, private headerService : HeaderService) {
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
      if(this.form.value.type == "passager"){
        localStorage.setItem('type', this.form.value.type);
      }
    }
  }

}
