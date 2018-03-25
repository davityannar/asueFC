import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselModule } from 'ngx-bootstrap';
import {CompFootComponent, CompHeadComponent,CompHostComponent} from "./index";
import {routes} from "../app.routes";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot(routes),

  ],
  declarations: [
    CompFootComponent,
    CompHeadComponent,
    CompHostComponent
  ]
})
export class CompModule {

}
