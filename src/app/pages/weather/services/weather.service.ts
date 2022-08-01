import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Coord, WeatherData } from "src/app/shared/interface/interface.weather";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class WeatherService{
  private readonly API_URL = environment.openWeather.apiUrl;

  constructor(private readonly http:HttpClient){

  }
  public getWeatherByName(city:string): Observable<WeatherData>{
    const params = new HttpParams()
    .set('q',city)
    return this.http.get<WeatherData>(`${this.API_URL}/weather`,{params});
  }
  public getWeatherByCoords(coord:Coord):Observable<WeatherData>{
    const params = new HttpParams()
    .set('lat',coord.lat)
    .set('lon',coord.lon)
   return this.http.get<WeatherData>(`${this.API_URL}/weather`,{params});
  }
  }

