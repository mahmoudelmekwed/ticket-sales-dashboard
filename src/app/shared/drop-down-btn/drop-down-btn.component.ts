import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-drop-down-btn',
  standalone: true,
  imports: [FormsModule, DropdownModule],
  templateUrl: './drop-down-btn.component.html',
  styleUrl: './drop-down-btn.component.scss'
})
export class DropDownBtnComponent {
  periods!: any[];
  selectedPeriod: any;

  ngOnInit() {
    this.periods = [
      { label: 'سنويا', value: 'yearly' },
      { label: 'شهريا', value: 'monthly' },
      { label: 'يوميا', value: 'daily' }
    ];
}
}
