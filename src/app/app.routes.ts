import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero/hero';

export const routes: Routes = [

    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('./components/hero/hero/hero').then(m => m.Hero)},
    {path: 'what-we-do', loadComponent: () => import('./components/whatwedo/whatwedo/whatwedo').then(m => m.WhatWeDo)},
    {path: 'about-us', loadComponent: () => import('./components/aboutus/aboutus/aboutus').then(m => m.Aboutus)},
    {path: 'contact-us', loadComponent: () => import('./components/contactus/contactus/contactus').then(m => m.Contactus)},
    {path: 'careers', loadComponent: () => import('./components/careers/careers/careers').then(m => m.Careers)},
];
