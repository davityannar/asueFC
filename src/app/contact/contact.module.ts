import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselModule } from 'ngx-bootstrap';
import {ContactUsComponent} from "./index";


@NgModule({
  imports: [
    CommonModule,
    CarouselModule.forRoot()
  ],
  declarations: [

    ContactUsComponent
  ]
})
export class ContactModule {

}
