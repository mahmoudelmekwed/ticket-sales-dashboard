import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

    constructor(@Inject(DOCUMENT) private document: Document) {}

    setDirection(language: string): void {
      const dir = language === 'ar' ? 'rtl' : 'ltr'; // Set 'rtl' for Arabic, 'ltr' for other languages
      this.document.documentElement.dir = dir; // Change the direction in the root HTML element
    }
}
