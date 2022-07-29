import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/shared/interface/interface.weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent implements OnInit {
  @Input() public weather!:WeatherData
  constructor() { }

  ngOnInit(): void {
  }

}
