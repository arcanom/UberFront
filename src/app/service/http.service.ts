import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url : string = "http://localhost:8081/";
  url2 : string = "http://localhost:8082/";

  constructor(private http : HttpClient) { }
}
