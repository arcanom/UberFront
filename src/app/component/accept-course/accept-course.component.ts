import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from 'src/app/models/trip';
import { HttpService } from 'src/app/service/http.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-accept-course',
  templateUrl: './accept-course.component.html',
  styleUrls: ['./accept-course.component.css']
})
export class AcceptCourseComponent implements OnInit {
trips!: any[]
state: any
driver: any
data !: any
getTrips(){
  this.http.getTripsCreated().subscribe((trip)=>{
    console.log(trip)
    this.trips =  trip
  })
}

  constructor(private http : HttpService, private storageService: StorageService,private route:Router) { }

  ngOnInit(): void {
    this.getTrips()
  }

  accept(id:number){
      this.data = this.storageService.getId()
      this.state = {
        state : "VALIDATED"
      }
      this.driver = {
        driver : parseInt(this.data)
      }
      // console.log(this.driver)

      this.http.updateTripStatus(id,this.state).subscribe((x)=>{

      })
      this.http.updateTripDriver(id,parseInt(this.data)).subscribe((x)=>{

      })
      this.route.navigate(['/main'])
    }

}
