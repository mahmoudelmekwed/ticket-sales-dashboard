import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { TableComponent } from './table/table.component';
import { LanguageService } from './services/language.service';
import { CardComponent } from "./card/card.component";
import { ChartComponent } from "./chart/chart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TableComponent, CardComponent, ChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ticket-sales-dashboard';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    // Set default language and direction
    const defaultLanguage = 'ar'; // Set 'ar' for Arabic as the default
    this.languageService.setDirection(defaultLanguage);
  }

  changeLanguage(language: string): void {
    this.languageService.setDirection(language);
    // Further logic for language change, e.g., load translation files
  }
}
