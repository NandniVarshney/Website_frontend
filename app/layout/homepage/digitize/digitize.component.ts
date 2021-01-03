import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digitize',
  templateUrl: './digitize.component.html',
  styleUrls: ['./digitize.component.css']
})
export class DigitizeComponent implements OnInit {

  public homepageData = [];
  public month = ["", "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  public digitize = [];


  ngOnInit() {
    /*this.digitize=[
      { name:'Smart Parking',imgPath:'assets/image/Smart_Parking.png',id:'card-1'},
      { name:'Smart Metering' , imgPath:'assets/image/SmartMetering.png',id:'card-4'},
      { name:'Smart waste Bins',imgPath:'assets/image/SmartWasteBins.png',id:'card-7'},
      { name:'Smart Street Lights', imgPath:'assets/image/SmartStreetLights.png',id:'card-5'},
      { name:'Smart Environmental Sensors', imgPath:'assets/image/SmartEnvironmentalSensors.png',id:'card-3'},
      { name:'Smart Buildings',  imgPath:'assets/image/SmartBuildings.png',id:'card-2'},
      { name: 'Smart Trackers', imgPath:'assets/image/SmartTrackers.png',id:'card-6'},
      { name:'Smart Agriculture Sensors',imgPath:'assets/image/Smart_Agriculture.png',id:'card-8'}
    ]*/
  }
  constructor() {
    fetch(`http://localhost:2000/homepage/get`)
      .then(res => { return res.json() })
      .then(res => {
        this.homepageData = res.info;
      })
      .catch(error => console.log('error'))

    fetch(`http://localhost:2000/solItem/getall`)
      .then(res => { return res.json() })
      .then(res => {
        this.digitize = res.data;
      })
      .catch(error => console.log('error'))


      


  }

  // public digitize:any;

  
  /*myEvent(id) {
    document.getElementById(id).innerHTML = "You will find that you now have a large variety of user-initiated events from which you can make your Angular app responsive.";
  }*/
}
