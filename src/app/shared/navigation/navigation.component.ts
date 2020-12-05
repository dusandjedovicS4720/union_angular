import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationBaseComponent implements OnInit {

  listItems: any = [
    {
      name: "Pocetna",
      link: "/home",
      isAnchor: false
    },
    {
      name: "O Univerzitetu",
      isAnchor: true,
      link: "/about-us",
      dropdownItems: [
        {name: "Istorijat", link: "/istorijat"},
        {
          name: "Brosura Univerziteta",
          link: "/brosuraUniverziteta",
          isDocument: true,
          documentUrl: "/assets/about-us/BrosuraUniverziteta.pdf"
        },
        {
          name: "Informator o radu",
          link: "/informatorORadu",
          isDocument: true,
          documentUrl: "/assets/about-us/InformatorORadu.pdf"
        },
        {name: "Rektor Univerziteta", link: "/rektorUniverziteta"},
        {name: "Senat i savet Univerziteta", link: "/senatSavetUniverziteta"}
        ]
    },
    {
      name: "Kontakt",
      link: "/contact",
      isAnchor: false
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
