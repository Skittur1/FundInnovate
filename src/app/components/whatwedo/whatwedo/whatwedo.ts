import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatwedo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatwedo.html',
  styleUrl: './whatwedo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatWeDo {
  readonly services = [
     {
      title: 'Fund Raising',
      description:
        'Equity Funding, Debt Funding, Government Grants, Incubation Support, Acceleration Support',
      points: [],
      photos: ['assets/images/Fund-Rising.jpg'],
    },
    
    {
      title: 'Pitchdeck',
      description:
        'Transforming your vision into compelling investor-ready presentations that communicate with clarity and drive conviction.',
    //   points: ['Ready Templates'],
        photos: ['assets/images/PitchDeck.jpg'],
    },
    {
      title: 'Business Valuation',
      description:
        'Delivering data-driven valuation insights to support fundraising, strategic decisions, and business growth.',
      points: [],
      photos: ['assets/images/Valution.jpg'],
    },
    {
      title: 'Lead Generation',
      description:
        'Building targeted investor pipelines through research, outreach, and strategic engagement to accelerate fundraising outcomes.',
      points: [],
      photos: ['assets/images/Lead-generation.jpg'],
    },
    {
      title: 'Tax Advsiory',
      description:
        'Strategic tax planning and advisory solutions to support business growth, transactions, and compliance.',
      points: [],
      photos: ['assets/images/tax-advisory.jpg'],
    },
    {
      title: 'Website Development',
      description:
        'Building modern, responsive, and high-performing websites tailored to business needs.',
      points: [],
        photos: ['assets/images/webdevelopment.jpg'],
    },

    {
      title: 'Mentorship',
      description:
        'Delivering personalised one-on-one advisory to founders and businesses at every stage of their journey.',
      points: [],
      photos: ['assets/images/mentor.png'],
    },
  ];
}
