import { Injectable } from '@angular/core';

@Injectable()
export class CardServiceService {

  cardArr = [
    {
      cardNumber: 0,
      imageUrl: "../../../assets/foto%20asue%20sayt/poznan/lav.jpg",
      cardPar: " ASUE Futsal Team became the winner of the 16th Republican sport games.\n" +
      "      Our team had won the championship 4 years in a row."
    },

    {
      cardNumber: 1,
      imageUrl: "../../../assets/foto%20asue%20sayt/champ.jpg",
      cardPar: "ASUE futsal team became the two-time champion of Armenia"
    },

    {
      cardNumber: 2,
      imageUrl: "../../../assets/foto%20asue%20sayt/zagreb/eug16.jpg",
      cardPar: "THE 3RD EDITION OF THE EUROPEAN UNIVERSITIES GAMES 2016"
    },

    {
      cardNumber: 3,
      imageUrl: "../../../assets/foto%20asue%20sayt/zagreb/falsh.jpg",
      cardPar: "10TH EUROPEAN UNIVERSITIES FUTSAL CHAMPIONSHIP"
    }

  ];


  constructor() { }

}
