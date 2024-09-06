import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import { FileSaverService } from 'ngx-filesaver';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor(private fileSaverService: FileSaverService) { }

  downloadFile(ticketDetails: string, fileName: string): void {
    const doc = new jsPDF();
    doc.text(ticketDetails, 10, 10);
    const pdfBlob = doc.output('blob');
    this.fileSaverService.save(pdfBlob, `${fileName}.pdf`);
  }
}
