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
        {name: "Ukratko", link: "/about-us", tabIndex: 0},
        {name: "Brosura Univerziteta", link: "/about-us", tabIndex: 1},
        {name: "Informator o radu", link: "/about-us", tabIndex: 2},
        {name: "Rektor Univerziteta", link: "/about-us", tabIndex: 3},
        {name: "Senat Univerziteta", link: "/about-us", tabIndex: 4},
        {name: "Savet Univerziteta", link: "/about-us", tabIndex: 5}
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
