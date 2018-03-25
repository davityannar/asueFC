import { Component, OnInit } from '@angular/core';
import {CardServiceService} from "./card-service.service";

@Component({
  selector: 'app-card-n',
  templateUrl: './card-n.component.html',
  styleUrls: ['./card-n.component.css'],
  providers: [CardServiceService]

})
export class CardNComponent implements OnInit {

  cardArr = [];
  constructor( private cardservice: CardServiceService ){
  }

  ngOnInit(){
    this.cardArr = this.cardservice.cardArr;
  }

}
