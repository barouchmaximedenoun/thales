import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import {WeatherRoutingModule} from './weather-routing.module';
import {MaterialModule} from '../material';



// @ts-ignore
@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    MaterialModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
