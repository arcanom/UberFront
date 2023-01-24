import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
type : any
data: any
id !:  number
trips !: any
tripsDriver !:  any
state!: any
titre:string="Vos courses"
  constructor(private storageService : StorageService, private http : HttpService, private route:Router) {
    this.type = this.storageService.get()
    this.getTrips(this.type)
  }

  getTrips(type:any){
    this.data = this.storageService.getId()
    this.id = parseInt(this.data)
    if(type=="passager"){
        this.http.getTripsByPassager(this.id).subscribe((trip)=>{
          console.log(trip)
          this.trips = trip
        })
    } else if(type=="conducteur") {
        this.http.getTripsByDriver(this.id).subscribe((trip)=>{
         //console.log(trip)
          this.tripsDriver = trip
        })
    }
  }

  changeStatusValidatedToInProgress(id:number){

    this.state = {
      state : "INPROGRESS"
    }

    this.http.updateTripStatus(id,this.state).subscribe((x)=>{

    })
    this.route.navigate(['/main'])
  }

  changeStatusInProgressToFinished(id:number){

    this.state = {
      state : "FINISHED"
    }

    this.http.updateTripStatus(id,this.state).subscribe((x)=>{

    })
    this.route.navigate(['/main'])
  }

  changeStatusFinishedToPaid(id:number){

    this.state = {
      state : "PAID"
    }

    this.http.updateTripStatus(id,this.state).subscribe((x)=>{

    })
    this.route.navigate(['/main'])
  }




  changeStatusToCanceled(id:number){
    this.state = {
      state : "CANCELED"
    }
    this.http.updateTripStatus(id,this.state).subscribe((x)=>{

    })
  }


  ngOnInit(): void {

  }

}
