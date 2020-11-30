/// <reference types="@types/googlemaps" /> // Zapravo tri kose crte import-uju ts file. Ne sme postojati nista pre ovog importa.
import {Component, OnInit, ViewChild} from '@angular/core';
import Marker = google.maps.Marker;


// npm install @types/googlemaps
// Omogucava koriscenje google globalne varijable zajedno sa typescript-om

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private googleMap: google.maps.Map

  @ViewChild('gmap') gmapElement: any;

  constructor() {
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


}
