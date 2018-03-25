import { Component, OnInit } from '@angular/core';
import {LogonService} from "./logon.service";
import {CardServiceService} from "../../home/card-n/card-service.service";

@Component({
  selector: 'app-narfoot',
  templateUrl: './narfoot.component.html',
  styleUrls: ['./narfoot.component.css'],
  providers: [LogonService]

})
export class NarfootComponent implements OnInit {

  logoArr = [];
  constructor( private logoservice: LogonService ){
  }

  ngOnInit(){
    this.logoArr = this.logoservice.logoArr;
  }
}
