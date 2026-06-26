import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from "./components/hero/hero/hero";
import { Header } from "./components/header/header/header";
import { Footer } from "./components/footer/footer/footer";
import { WhatWeDo } from "./components/whatwedo/whatwedo/whatwedo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Header, Footer, WhatWeDo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FundInnovate');
}
