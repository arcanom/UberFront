import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titre : string = "";
  constructor(private headerService : HeaderService) { }

  ngOnInit(): void {
    this.headerService.change.subscribe((x)=>{
      this.titre = x;
    })
  }

}
