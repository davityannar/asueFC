import { Component, OnInit } from '@angular/core';
import {Carusel1Service} from "../../carusel1.service";

@Component({
  selector: 'app-carusel-n',
  templateUrl: './carusel-n.component.html',
  styleUrls: ['./carusel-n.component.css'],
  providers: [Carusel1Service]

})
export class CaruselNComponent implements OnInit {

  carSlide = [];
  constructor( private carusel1service: Carusel1Service ){
  }

  ngOnInit(){
    this.carSlide = this.carusel1service.carSlide;
    console.log(this.carSlide);
  }

}
