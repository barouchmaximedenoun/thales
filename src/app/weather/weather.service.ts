import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpService: HttpClient) { }

  getCities(): Observable<any> {
    return this.httpService.get('/assets/city.list.json');
  }

  getWeatherInfo(city: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1890fcd579ac51bb12f42af3ceed6428`
    console.log(url);
    return this.httpService.get(url);
  }

}
