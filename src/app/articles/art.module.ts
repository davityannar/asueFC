import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselModule } from 'ngx-bootstrap';
import { Uefa2015Component, Uefa2016Component,Eug15Component ,Eug16Component,Arm15Component,Arm16Component} from "./index";
import {routes} from "../app.routes";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot(routes),

  ],
  declarations: [
    Uefa2015Component,
    Uefa2016Component,
    Eug15Component,
    Eug16Component,
    Arm15Component,
    Arm16Component

  ]
})
export class ArtModule {

}
