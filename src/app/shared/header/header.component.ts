import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titre : string = "";
  type: any
  constructor(private headerService : HeaderService,private storageService :  StorageService) {

    this.type=this.storageService.get()
    if(this.type == "passager"){
      console.log("passager");
      this.headerService.changeTitre(this.titre)

    }else if(this.type == "conducteur"){
      console.log("conducteur");
      this.headerService.changeTitre(this.titre)

    }else{
      console.log("rien");

    }

   }

  ngOnInit(): void {
    this.headerService.change.subscribe((x)=>{
      this.titre = x;
    })
  }

}
