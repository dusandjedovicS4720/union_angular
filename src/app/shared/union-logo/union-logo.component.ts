import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-union-logo',
  templateUrl: './union-logo.component.html',
  styleUrls: ['./union-logo.component.scss']
})
export class UnionLogoComponent implements OnInit {

  @Input() isLogoDark: boolean = false;
  logoLight: string = "../../assets/svg/union.svg"
  logoDark: string = "../../assets/svg/union_dark.svg"

  constructor() { }

  ngOnInit(): void {
  }

}
