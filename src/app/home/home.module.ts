import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [SliderComponent, SearchComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
