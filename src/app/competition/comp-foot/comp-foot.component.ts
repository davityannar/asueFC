import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-comp-foot',
  templateUrl: './comp-foot.component.html',
  styleUrls: ['./comp-foot.component.css']
})
export class CompFootComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
  isCollapsed: boolean = true;

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
