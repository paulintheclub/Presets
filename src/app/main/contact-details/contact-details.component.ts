import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetailsComponent {
  email: string = '';

  constructor(private emailService: EmailService) {}

  onInquireNowClick() {
    this.emailService.sendEmail({ to: this.email, subject: 'Welcome to the Lenscape community!', text: 'Hi!\n' +
        '\n' +
        'Thank you for your interest in Lenscape and for leaving your email. We are happy to welcome you to our community!\n' +
        '\n' +
        'There\'s a lot of exciting things ahead for you as we share the latest news about our products, special offers and exclusive promotions available only to our subscribers.\n' +
        '\n' +
        'We strive to offer you the best, and your support inspires us with new ideas and solutions. Follow our updates and you will be the first to know about all the most interesting things!\n' +
        '\n' +
        'If you have any questions, suggestions or ideas you would like to share, feel free to contact us. We\'re always open to feedback and welcome any opportunity to make our community even better.\n' +
        '\n' +
        'Thank you for being with us!\n' +
        '\n' +
        'Best wishes,\n' +
        'Lenscape Team.' })
      .subscribe({
        next: (response) => console.log('Email sent successfully', response),
        error: (error) => console.error('Error sending email', error)
      });

  }
}
