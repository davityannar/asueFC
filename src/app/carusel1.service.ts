import { Injectable } from '@angular/core';

@Injectable()
export class Carusel1Service {

  carSlide = [
    {
      slideNumber: 0,
      imageUrl: "https://storage.googleapis.com/cdn.ucraft.me/userFiles/futsal/images/r100-BcXIge33B0c.jpg",
      slideLab: "../assets/foto%20asue%20sayt/logo%20(2).png",
      slidePar: "Student Team Armenian State University of Economic"
    },



    // {
    //   slideNumber: 1,
    //   imageUrl: "../../../assets/foto%20asue%20sayt/slide3.jpg",
    //   slideLab: "../assets/foto%20asue%20sayt/uefa/uefapn.png",
    //   slidePar: "STUDENT TEAM 2"
    // }

  ];

  constructor() { }

}
