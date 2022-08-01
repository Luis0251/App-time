import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class GeoLocationS{
  public getPosition(): Promise<any>{
    const options ={
      enableHighAccuracy:true,
      timeout:5000,
      maxAge: 0
    };
   return new Promise((resolve,reject)=>{
    navigator.geolocation.getCurrentPosition(resolve,reject,options)
  })
  }
}
