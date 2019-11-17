import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isSidebarOpened = false;

  constructor() { }

  ngOnInit() {
  }

  log(state) {
    console.log(state);
  }
}
