import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SignupCard } from '../../signup-card/signup-card/signup-card';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, SignupCard],
  templateUrl: './hero.html',
   changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './hero.css',
})
export class Hero {
  email = signal('');
  submitted = signal(false);
 
  readonly discoverItems = [
    {
      icon: 'corners',
      title: 'Fund Raising',
      description:
        'Equity Funding, Debt Funding, Government Grants, Incubation Support, Acceleration Support',
    },
    {
      icon: 'corners',
      title: 'Pitchdeck',
      description:
        'Transforming your vision into compelling investor-ready presentations that communicate with clarity and drive conviction.',
    },
    {
      icon: 'corners',
      title: 'Business Valuation',
      description:
        'Delivering data-driven valuation insights to support fundraising, strategic decisions, and business growth.',
    },
    {
      icon: 'corners',
      title: 'Lead Generation',
      description:
        'Building targeted investor pipelines through research, outreach, and strategic engagement to accelerate fundraising outcomes.',
    },
    {
      icon: 'corners',
      title: 'Tax Advsiory',
      description:
        'Strategic tax planning and advisory solutions to support business growth, transactions, and compliance.',
    },
    {
      icon: 'corners',
      title: 'Website Development',
      description:
        'Building modern, responsive, and high-performing websites tailored to business needs.',
    },
    {
      icon: 'corners',
      title: 'Mentorship',
      description:
        'Delivering personalised one-on-one advisory to founders and businesses at every stage of their journey.',
    },
  ];
 
  onNotifyMe(): void {
    if (!this.email().trim()) {
      return;
    }
    this.submitted.set(true);
    // Hook your subscription/API call here.
    console.log('Notify me requested for:', this.email());
  }
}
