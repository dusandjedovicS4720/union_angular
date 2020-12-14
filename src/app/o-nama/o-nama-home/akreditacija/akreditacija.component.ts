import { Component, OnInit } from '@angular/core';
import { OUniverzitetuService } from '../../services/oUniverzitetu.service';

@Component({
  selector: 'app-akreditacija',
  templateUrl: './akreditacija.component.html',
  styleUrls: ['./akreditacija.component.scss'],
})
export class AkreditacijaComponent implements OnInit {
  akreditacija_po_zakonu_o_univerzitetu_iz_2002_godine: any[];
  akreditacija_po_zakonu_o_visokom_obrazovanju: any[];

  constructor(private oUniverzitetuService: OUniverzitetuService) {}

  ngOnInit(): void {
    this.oUniverzitetuService.getAkreditacije().subscribe((result: any) => {
      this.akreditacija_po_zakonu_o_univerzitetu_iz_2002_godine =
        result['akreditacija'][
          'akreditacija_po_zakonu_o_univerzitetu_iz_2002_godine'
        ];
      this.akreditacija_po_zakonu_o_visokom_obrazovanju =
        result['akreditacija']['akreditacija_po_zakonu_o_visokom_obrazovanju'];
    });
  }

  on_open_PDF(id: number) {
    console.log(id);
    this.oUniverzitetuService.getAkreditacija(id).subscribe((result: any) => {
      var byteCharacters = atob(result['pdfBytes']);
      var byteNumbers = new Array(byteCharacters.length);
      for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      var blob = new Blob([byteArray], { type: 'application/pdf' });
      var fileURL = URL.createObjectURL(blob);
      window.open(fileURL, '_blank');
    });
  }
}
