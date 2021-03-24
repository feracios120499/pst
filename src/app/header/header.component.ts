import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scroll(0,0);
    console.log(location.href);
  }

  toRoute(route: string) {
    this.router.navigateByUrl(route);
  }

  isActive(route: string) {
    return this.router.url.indexOf(route) >= 0;
  }

  openMenu() {
    let elem = document.getElementById('mobileMenu');
    if (elem.classList.contains('show')) {
      elem.classList.remove('show');
    }
    else {
      elem.classList.add('show');
    }

  }
}
