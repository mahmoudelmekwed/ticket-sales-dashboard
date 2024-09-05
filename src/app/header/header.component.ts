import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ticketDetails } from '../constant/ticket.const';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title: string = ticketDetails.ticketNo
}
