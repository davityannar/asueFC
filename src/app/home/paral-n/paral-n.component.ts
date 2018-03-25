import { Component, OnInit,OnDestroy  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subscription }   from 'rxjs/Subscription';



@Component({
  selector: 'app-paral-n',
  templateUrl: './paral-n.component.html',
  styleUrls: ['./paral-n.component.css']
})
export class ParalNComponent implements OnInit,OnDestroy  {


  private wowSubscription: Subscription;

  constructor(private router: Router, private wowService: NgwWowService){
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {

      this.wowService.init();
    });

  }

  ngOnInit() {
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item:HTMLElement) => {
      });
  }

  ngOnDestroy() {
    this.wowSubscription.unsubscribe();
  }
}
