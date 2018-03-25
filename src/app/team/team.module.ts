import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselModule } from 'ngx-bootstrap';

import {TeamHostComponent, TeamCaruselComponent} from "./index";
import { TeamParalComponent } from './team-paral/team-paral.component';
import { TeamCardComponent } from './team-card/team-card.component';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule.forRoot()
  ],
  declarations: [
    TeamHostComponent,
    TeamCaruselComponent,
    TeamParalComponent,
    TeamCardComponent
  ]
})
export class TeamModule {

}
