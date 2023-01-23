import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PassengerDTO } from '../models/passenger-dto';
import { Passenger } from '../models/passenger';
import { DriverDTO } from '../models/driver-dto';
import { TripDto } from '../models/trip-dto';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url : string = "http://localhost:8080/";


  constructor(private http : HttpClient) { }

createPassager(passenger: PassengerDTO):Observable<any>{

  return this.http.post(this.url+"passenger",passenger)
}


getPassagerByEmail(email:string):Observable<Passenger>{
  return this.http.get(this.url)
}

createDriver(driver: DriverDTO):Observable<any>{
  return this.http.post(this.url+"driver",driver)
}

createTrip(trip:TripDto):Observable<any>{
  return this.http.post(this.url+"trip",trip)
}



}
