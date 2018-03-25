import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgwWowModule } from 'ngx-wow';



import { HomeModule } from "./home/home.module";
import { TeamModule } from './team/team.module';
import { CompModule} from './competition/comp.module';
import { ContactModule} from './contact/contact.module';
import { ArtModule} from './articles/art.module';


import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

import {CollapseModule, BsDropdownModule} from 'ngx-bootstrap';
import { NarnavComponent } from './navfoot';
import { NarfootComponent } from './navfoot/narfoot/narfoot.component';






@NgModule({
    imports: [
        BrowserModule,
        CollapseModule,
        BsDropdownModule.forRoot(),
        HomeModule,
        TeamModule,
         CompModule,
      ContactModule,
      ArtModule,
        RouterModule.forRoot(routes),
      NgwWowModule.forRoot(),

    ],
    declarations: [AppComponent, NarnavComponent, NarfootComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
