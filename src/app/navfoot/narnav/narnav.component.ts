import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-narnav',
  templateUrl: './narnav.component.html',
  styleUrls: ['./narnav.component.css']
})
export class NarnavComponent implements OnInit {

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
