import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { SearchComponent } from './search/search.component';
import { PopularCarsComponent } from './popular-cars/popular-cars.component';
import { CtaComponent } from './cta/cta.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [HomeComponent, CtaComponent, PopularCarsComponent, SearchComponent, SliderComponent, TestimonialsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule,
    WavesModule,
    NgbModule
  ]
})
export class HomeModule { }
