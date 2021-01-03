import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public newEvents = [];
  public pastEvents = [];
  public flagNew : Boolean = true;
  public flagPast : Boolean = true;
  public month = ["","Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  constructor() {
     this.loadPastEvent();
     this.loadNewEvent();
     
  }

  ngOnInit() {
  }


  loadNewEvent() {
    fetch(`http://localhost:2000/events/loadmore/${this.newEvents.length}/6?flag=new`)
      .then(res => { return res.json() })
      .then(res => {
        this.newEvents = this.newEvents.concat(res.data);
        if(this.newEvents.length==parseInt(res.info)){
          this.flagNew=false;
        }
      })
      .catch(error => console.log('error'))

  }
  loadPastEvent() {
    fetch(`http://localhost:2000/events/loadmore/${this.pastEvents.length}/3?flag=past`)
      .then(res => { return res.json() })
      .then(res => {
        this.pastEvents = this.pastEvents.concat(res.data);
        if(this.pastEvents.length==parseInt(res.info)) {
          this.flagPast=false;
        }
      })
      .catch(error => console.log('error'))

      

  }
}
