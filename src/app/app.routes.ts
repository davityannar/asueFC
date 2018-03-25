import { Routes } from "@angular/router";

import { HomeHostComponent } from "./home";
import {TeamHostComponent} from "./team";
import {CompHostComponent} from './competition';
import {ContactUsComponent} from './contact';
import {Arm15Component, Arm16Component, Eug15Component, Eug16Component, Uefa2015Component,Uefa2016Component} from "./articles";


export const routes: Routes = [
    { path: "", redirectTo: "sample1", pathMatch: "full" },
    { path: "sample1", component: HomeHostComponent },
    { path: "sample2", component: TeamHostComponent },
    { path: "sample3", component: CompHostComponent },
    { path: "sample4", component: ContactUsComponent },
    { path: "sample5", component: Uefa2015Component },
    { path: "sample6", component: Uefa2016Component },
    { path: "sample7", component: Eug15Component },
    { path: "sample8", component: Eug16Component },
    { path: "sample9", component: Arm15Component },
    { path: "sample10", component: Arm16Component },
];
