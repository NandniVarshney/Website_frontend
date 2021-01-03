import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public openPopUp : boolean;
  constructor() { }

  ngOnInit() {
  	this.openPopUp = true;
  }

}
