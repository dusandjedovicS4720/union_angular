import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationBaseComponent implements OnInit {
  listItems: any = [
    {
      name: 'Pocetna',
      link: '/pocetna',
      isAnchor: false,
    },
    {
      name: 'O Univerzitetu',
      isAnchor: true,
      link: '/o-univerzitetu',
      dropdownItems: [
        { name: 'Akreditacija', link: '/akreditacija' },
        { name: 'Istorijat', link: '/istorijat' },
        {
          name: 'Brosura Univerziteta',
          link: '/brosuraUniverziteta',
          isDocument: true,
          documentUrl:
            '/assets/o-univerzitetu/brosura_univerziteta/BrosuraUniverziteta.pdf',
        },
        {
          name: 'Informator o radu',
          link: '/informatorORadu',
          isDocument: true,
          documentUrl:
            '/assets/o-univerzitetu/informator_o_radu/InformatorORadu.pdf',
        },
        { name: 'Rektor Univerziteta', link: '/rektorUniverziteta' },
        { name: 'Senat i savet Univerziteta', link: '/senatSavetUniverziteta' },
      ],
    },
    {
      name: 'Repozitorijum',
      link: '/repozitorijum',
      isAnchor: false,
    },
    {
      name: 'Akti',
      link: '/akti',
      isAnchor: false,
    },
    {
      name: 'Clanice',
      link: '/clanice',
      isAnchor: false,
    },
    {
      name: 'Kontakt',
      link: '/kontakt',
      isAnchor: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
