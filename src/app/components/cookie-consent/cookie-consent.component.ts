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
    } else if (consent === 'accepted') {
      // If already accepted, load Clarity
      this.loadClarity();
    }
  }

  acceptCookies(): void {
    localStorage.setItem('cookie_consent', 'accepted');
    this.showBanner = false;

    // Load Clarity script dynamically
    this.loadClarity();
  }

  rejectCookies(): void {
    localStorage.setItem('cookie_consent', 'rejected');
    this.showBanner = false;
  }

  private loadClarity(): void {
    // Check if Clarity is already loaded
    if (window.clarity) {
      return;
    }

    // Load Microsoft Clarity script
    (function(c: any, l: any, a: string, r: string, i: string, t: any, y: any) {
      c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "u1z54keqlr");

    console.log('Microsoft Clarity loaded');
  }
}
