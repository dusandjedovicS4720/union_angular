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
      link: "",
      isAnchor: false
    },
    {
      name: "O Univerzitetu",
      isAnchor: true,
      link: "/about-us",
      dropdownItems: [
        {name: "Ukratko", link: "/about-us"},
        {name: "Brosura Univerziteta", link: "/about-us"},
        {name: "Informator o radu", link: "/about-us"},
        {name: "Rektor Univerziteta", link: "/about-us"},
        {name: "Senat Univerziteta", link: "/about-us"},
        {name: "Savet Univerziteta", link: "/about-us"}
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
