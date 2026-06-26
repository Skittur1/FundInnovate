import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
    menuOpen = signal(false);
 
  readonly navLinks = [
    { label: 'Home', path: '/' },
    { label: 'What We Do', path: '/what-we-do' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact Us', path: '/contact-us' },
    { label: 'Careers', path: '/careers' }
  ];
 
  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
 
  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
