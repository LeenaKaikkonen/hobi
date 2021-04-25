import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  nature = false;
  art = false;
  music = false;
  winter = false;
  sports = false;
  water = false;
  group = false;
  individual = false;

  constructor(private router: Router) {}

  proceed() {

   if (this.nature  || this.art   || this.music  )  {
     this.router.navigate(['/art']);
   }
  else {
    this.router.navigate(['/select_watersports']);
  }
}
}