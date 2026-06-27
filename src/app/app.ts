import { Component, signal, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Hero } from './components/hero/hero/hero';
import { Header } from './components/header/header/header';
import { Footer } from './components/footer/footer/footer';
import { WhatWeDo } from './components/whatwedo/whatwedo/whatwedo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Header, Footer, WhatWeDo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('FundInnovate');

  constructor(
    private readonly router: Router,
    private readonly viewportScroller: ViewportScroller,
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        this.viewportScroller.scrollToPosition([0, 0]);
      });
  }
}
