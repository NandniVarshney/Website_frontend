import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from '../homepage.component'

@Component({
  selector: 'app-staying',
  templateUrl: './staying.component.html',
  styleUrls: ['./staying.component.css']
})
export class StayingComponent implements OnInit  {

  constructor(public homePageComponent: HomepageComponent) { 
  }
  
  ngOnInit() {
  }

playVideo() {
  let  video = document.getElementById("homeVideo");
  let doc=document.getElementById("body");
  if (video.style.visibility === "hidden") {
    doc.style.opacity=".2";
    video.style.visibility = "visible";
  } 
  else {
    doc.style.opacity="1";
    video.style.visibility = "hidden";
  }
  this.homePageComponent.openPopUp = false
}
closeVideo(){
  let  video = document.getElementById("homeVideo");
  let doc=document.getElementById("body");
  if (video.style.visibility === "visible") {
    doc.style.opacity="1";
    video.style.visibility = "hidden";
  
  } 
  this.homePageComponent.openPopUp = true;
}
}

// var value=[[145, 182], [240, 482], [100, 122], [640,1200]];
// var cid="cid";
// var option={color:"#4BB6F9", width:520};
// const barchart = new StayingComponent(value,option);