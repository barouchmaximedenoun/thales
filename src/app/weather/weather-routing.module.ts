import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather.component';

const routes: Routes = [{
    path: '',
    component: WeatherComponent
}];

// @ts-ignore
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WeatherRoutingModule {
}
