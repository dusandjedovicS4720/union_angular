import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  @Input() listItems: any = [];

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

  onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
