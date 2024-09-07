import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule, Table } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { dummyAccounts } from '../shared/constant/ticket.const';
import { FileDownloadService } from '../services/file-download.service';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputSwitchModule } from 'primeng/inputswitch';
import { Account } from '../shared/models/interfaces/user';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    TableModule, 
    CommonModule,
    FormsModule, 
    InputTextModule, 
    TagModule, 
    DropdownModule, 
    MultiSelectModule, 
    ProgressBarModule, 
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputSwitchModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  accounts: Account[] = dummyAccounts;

  metaKey: boolean = true;


  constructor(private fileDownloadService: FileDownloadService) {}

  downloadTicket(ticketDetails: string, ticketName: string): void {
    this.fileDownloadService.downloadFile(ticketDetails, ticketName);
  }
}
