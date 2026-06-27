import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  imports: [],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css',
})
export class Aboutus {

   readonly team = [
    {
      id: 'founder',
      role: ' Founder',
      name: 'Sonali Arora',
      bio: 'Sonali Arora	creating investor-ready pitch decks and investment memorandum that convert founders vision into compelling investment stories. Supporting fundraising through lead generation, investor engagement, tailored funding strategies aligned with business needs, founder mentoring, and coordination through funding discussions and deal execution.	',
      photo: '/assets/images/founder.jpg',
    },
    {
      id: 'co-founder',
      role: 'Co-Founder',
      name: 'CA Parth Gupta',
      bio: 'CA Parth Gupta	helping founders build investor-ready financial models and stage-appropriate valuation models to support fundraising goals and justify capital expectations. Supporting investor engagement and founder-investor discussions through successful deal execution.',
      photo: '/assets/images/Co_founder.jpg',
    },
  ];
}
