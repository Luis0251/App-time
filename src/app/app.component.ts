import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from './pages/weather/services/weather.service';
import { WeatherData } from './shared/interface/interface.weather';
import { GeoLocationS } from './shared/services/geo-location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public weather$!: Observable<WeatherData>;
  constructor(private readonly weatherSvc: WeatherService, private readonly GeoLocationSvc: GeoLocationS){
    this.getLocation();
  }

  public onSearch(city:string):void{
    this.weather$ = this.weatherSvc.getWeatherByName(city);

  }
  private async getLocation():Promise<void>{
    try {
     const {coords} = await this.GeoLocationSvc.getPosition();
    this.weather$ = this.weatherSvc.getWeatherByCoords(coords);
    } catch (error) {
      console.log(error)
    }
  }
}
