import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare global {
  interface Window {
    clarity?: any;
  }
}

@Component({
  selector: 'app-cookie-consent',
  imports: [CommonModule],
  templateUrl: './cookie-consent.component.html',
  styleUrl: './cookie-consent.component.scss'
})
export class CookieConsentComponent implements OnInit {
  showBanner = false;

  constructor() {}

  ngOnInit(): void {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => {
        this.showBanner = true;
      }, 1000);
    }
  }

  acceptCookies(): void {
    localStorage.setItem('cookie_consent', 'accepted');
    this.showBanner = false;

    // Reload page to load Clarity script
    window.location.reload();
  }

  rejectCookies(): void {
    localStorage.setItem('cookie_consent', 'rejected');
    this.showBanner = false;
  }
}
