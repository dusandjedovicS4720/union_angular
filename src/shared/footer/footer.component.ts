import {Component, OnInit, Input} from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() backgroundColor: string = "#1c1b7e"
  @Input() textColor: string = "#fff"

  @Input() nameColor: string = "#Fde895"

  @Input() isLogoDark: boolean = false;
  logoLight: string = "../../assets/svg/union.svg"
  logoDark: string = "../../assets/svg/union_dark.svg"

  constructor() {
  }

  ngOnInit(): void {
  }

}
