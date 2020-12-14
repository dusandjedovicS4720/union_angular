import { Component, OnInit } from '@angular/core';
import { AktiService } from '../services/akti.service';

@Component({
  selector: 'app-akti-home',
  templateUrl: './akti-home.component.html',
  styleUrls: ['./akti-home.component.scss'],
})
export class AktiHomeComponent implements OnInit {
  akti_o_upisu_u_registar_kod_privrednog_suda: any[];
  pojedinacni_akti: any[];
  finansijski_izvestaji: any[];
  opsti_akti_univerziteta: any[];

  constructor(private aktiService: AktiService) {}

  ngOnInit(): void {
    this.aktiService.getAkti().subscribe((result: any) => {
      this.akti_o_upisu_u_registar_kod_privrednog_suda =
        result['akti']['akti_o_upisu_u_registar_kod_privrednog_suda'];
      this.pojedinacni_akti = result['akti']['pojedinacni_akti'];
      this.finansijski_izvestaji = result['akti']['finansijski_izvestaji'];
      this.opsti_akti_univerziteta = result['akti']['opsti_akti_univerziteta'];
    });
  }

  on_open_PDF(id: number) {
    console.log(id);
    this.aktiService.getAkt(id).subscribe((result: any) => {
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
