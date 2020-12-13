import { Component, OnInit } from '@angular/core';
import { AktiService } from '../services/akti.service';

@Component({
  selector: 'app-akti-home',
  templateUrl: './akti-home.component.html',
  styleUrls: ['./akti-home.component.scss']
})
export class AktiHomeComponent implements OnInit {

  akti_o_upisu_u_registar_kod_privrednog_suda: any[];
  pojedinacni_akti: any[];
  finansijski_izvestaji: any[];
  opsti_akti_univerziteta: any[];

  constructor(private aktiService: AktiService) { }

  ngOnInit(): void {
    this.aktiService.getAkti().subscribe((response: any) => {
      console.log(response)
      this.akti_o_upisu_u_registar_kod_privrednog_suda = response["akti"]["akti_o_upisu_u_registar_kod_privrednog_suda"];
      this.pojedinacni_akti = response["akti"]["pojedinacni_akti"];
      this.finansijski_izvestaji = response["akti"]["finansijski_izvestaji"];
      this.opsti_akti_univerziteta = response["akti"]["opsti_akti_univerziteta"];
    })
  }

  on_open_PDF(id: number) {

    console.log(id)

    //let file = new Blob([item.finansijski_izvestaji], { type: 'application/pdf' });
    //var fileURL = URL.createObjectURL(file);
    //window.open(fileURL);
  }

}
