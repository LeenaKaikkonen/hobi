import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  enteredemail = '';
  enteredpassword = '';

  constructor(private router: Router) {}

  login() {

    if (this.enteredemail.length > 0 && this.enteredpassword.length > 0) {
      this.router.navigate(['/choices']);
    }
  }

}
