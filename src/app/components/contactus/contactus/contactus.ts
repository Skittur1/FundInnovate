import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [FormsModule],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {


   formModel = {
    name: '',
    email: '',
    message: '',
  };
 
  submitted = signal(false);
  submitting = signal(false);
 
  onSubmit(): void {
    if (!this.formModel.name.trim() || !this.formModel.email.trim() || !this.formModel.message.trim()) {
      return;
    }
 
    this.submitting.set(true);
 
    // Hook your actual submission/API call here.
    console.log('Contact form submitted:', this.formModel);
 
    // Simulate a brief submit delay; replace with real async handling.
    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
      this.formModel = { name: '', email: '', message: '' };
    }, 400);
  }
}
