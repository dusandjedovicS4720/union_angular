/// <reference types="@types/googlemaps" /> // Zapravo tri kose crte import-uju ts file. Ne sme postojati nista pre ovog importa.
import {Component, OnInit, ViewChild} from '@angular/core';
import Marker = google.maps.Marker;

// npm install @types/googlemaps
// Omogucava koriscenje google globalne varijable zajedno sa typescript-om

@Component({
  selector: 'app-kontakt-home',
  templateUrl: './kontakt-home.component.html',
  styleUrls: ['./kontakt-home.component.scss']
})
export class KontaktHomeComponent implements OnInit {

  private googleMap: google.maps.Map

  @ViewChild('gmap') gmapElement: any;

  constructor() {
  }

  ngOnInit() {
    this.googleMap = new google.maps.Map(document.getElementById('gmap'), {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0
        }
      }
    )
  }

  addUserMarker(): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: 2455,
        lng: 1255
      }
    })
  }


}
