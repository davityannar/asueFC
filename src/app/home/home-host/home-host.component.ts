import { Component, OnInit } from '@angular/core';
import {CardServiceService} from "../card-n/card-service.service";

@Component({
  selector: 'app-home-host',
  templateUrl: './home-host.component.html',
  styleUrls: ['./home-host.component.css'],
  providers: [CardServiceService]

})
export class HomeHostComponent implements OnInit {

  cardArr = [];
  constructor( private cardservice: CardServiceService ){
  }

  ngOnInit(){
    this.cardArr = this.cardservice.cardArr;
  }

}
