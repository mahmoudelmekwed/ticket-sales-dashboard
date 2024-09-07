import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { Clipboard } from '@angular/cdk/clipboard';
import { TooltipModule } from 'primeng/tooltip';
import { QRCodeModule } from 'angularx-qrcode';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    DividerModule,
    ButtonModule,
    FormsModule,
    TooltipModule,
    QRCodeModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  textToCopy: string = 'www.tazkty.com/473847';
  qrData: string = 'www.tazkty.com/473847';
  shareText: string = 'مشاركة'; 

  constructor(private clipboard: Clipboard) {}

  copyToClipboard() {
    this.clipboard.copy(this.textToCopy);
  }
}
