import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup-card.html',
  styleUrls: ['./signup-card.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupCard {
  email = signal('');
  name = signal('');
  submitted = signal(false);

  onNotifyMe(): void {
    if (!this.email().trim()) return;
    this.submitted.set(true);
    console.log('Signup requested for:', this.email());
  }
}
