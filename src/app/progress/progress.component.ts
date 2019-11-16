import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  showSpinner = false;

  constructor() { }

  ngOnInit() {

  }

  loadData() {
    this.showSpinner = true;
    setTimeout(() => this.showSpinner = false, 5000);
  }

  onClick() {
    this.loadData();
  }
}
