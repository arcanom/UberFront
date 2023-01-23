import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get(){

    return localStorage.getItem("type")
  }

  set(type:any){
    localStorage.setItem("type",type)
  }

  remove(){
    localStorage.removeItem("type")
  }

  getEmail(){
    return localStorage.getItem("email")
  }

  setEmail(email: any ){
    localStorage.setItem("email",email)
  }

  removeEmail(){
    localStorage.removeItem("email")
  }
}
