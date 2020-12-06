import { Component, OnInit } from '@angular/core';
import {WeatherService} from './weather.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  cities$: Observable<any>;
  weatherInfo$: Observable<any>;
  selected;
  constructor(private citiesService: WeatherService) {
    this.cities$ = citiesService.getCities();
  }

  ngOnInit(): void {
  }

  handleCityClicked(event): void {
    console.log(this.selected);
    this.weatherInfo$ = this.citiesService.getWeatherInfo(this.selected);
  }
}
