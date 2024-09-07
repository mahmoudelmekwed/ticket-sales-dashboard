import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-date-range',
  standalone: true,
  imports: [
    FormsModule,
    CalendarModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './date-range.component.html',
  styleUrl: './date-range.component.scss'
})
export class DateRangeComponent {
  dateRangeForm: FormGroup;
  isDatePickerVisible = false;
  startDate: Date;
  endDate: Date;

  constructor(private fb: FormBuilder) {
    this.dateRangeForm = this.fb.group({
      startDate: [new Date(2023, 6, 5)], // default start date (05 July, 2023)
      endDate: [new Date(2023, 7, 5)]   // default end date (05 August, 2023)
    });

    this.startDate = this.dateRangeForm.value.startDate;
    this.endDate = this.dateRangeForm.value.endDate;
  }

  toggleDatePicker() {
    this.isDatePickerVisible = !this.isDatePickerVisible;
  }

  onStartDateChange(event: Date) {
    this.startDate = event;
  }

  onEndDateChange(event: Date) {
    this.endDate = event;
  }

  confirmDateRange() {
    this.dateRangeForm.patchValue({
      startDate: this.startDate,
      endDate: this.endDate
    });
    this.isDatePickerVisible = false;
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date ? date.toLocaleDateString('en-GB', options) : ''; // en-GB keeps numbers in standard format
    const arabicMonth = date.toLocaleDateString('ar-EG', { month: 'long' }); // Extract the month in Arabic
  
    return formattedDate.replace(date.toLocaleDateString('en-GB', { month: 'long' }), arabicMonth); // Replace English month with Arabic month
  }
}
