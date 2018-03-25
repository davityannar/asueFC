import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselModule } from 'ngx-bootstrap';
import { NgwWowModule } from 'ngx-wow';


import {HomeHostComponent, CardNComponent, CaruselNComponent, ParalNComponent} from "./index";

@NgModule({
  imports: [
    NgwWowModule,
    CommonModule,
    CarouselModule.forRoot()
  ],
  declarations: [
    HomeHostComponent,
    CardNComponent,
    CaruselNComponent,
    ParalNComponent

  ]
})
export class HomeModule {

}
