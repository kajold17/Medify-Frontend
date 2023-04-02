import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isScrolled: boolean = false;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (event: any): void => {
    if (window.pageYOffset > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

}
