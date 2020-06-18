import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.page.html',
  styleUrls: ['./terms-of-use.page.scss'],
})
export class TermsOfUsePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToTest() {
    this.router.navigate(['/home']);
  }
}
