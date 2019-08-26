import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SearchComponent } from './search/search.component';
import { PopularCarsComponent } from './popular-cars/popular-cars.component';

@NgModule({
  declarations: [SliderComponent, SearchComponent, PopularCarsComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
