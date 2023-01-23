import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/service/header.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  type: any
  titre:string=""
  constructor(private storageService :  StorageService, private headerService: HeaderService, private route: Router) {
    this.type = this.storageService.get()
    if(this.type =="passager"){
      this.titre="Journal de Bord (Passager)"
      this.headerService.changeTitre(this.titre)
    } else if(this.type=="conducteur"){
      this.titre="Journal de Bord (Conducteur)"
      this.headerService.changeTitre(this.titre)
    } else {
      this.titre="Journal de Bord (Test)"
      this.headerService.changeTitre(this.titre)
    }
  }

  ngOnInit(): void {

  }

  deconnect(){
    this.storageService.remove()
    this.route.navigate(['/acceuil'])
  }

}
