import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent implements OnInit {
  public solution = [];
  public login = [];


  
  constructor() {
    this.solution = [{ icon: "logo", name: "Smart Bins", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque eligendi velit tempora non dolores a. Quaerat accusantium excepturi non, possimus illum laboriosam eum suscipit culpa tenetur atque deserunt, nisi sit.", link : "Know More"},
    { icon: "logo", name: "Smart Cold Chain", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque eligendi velit tempora non dolores a. Quaerat accusantium excepturi non, possimus illum laboriosam eum suscipit culpa tenetur atque deserunt, nisi sit.", link : "Know More" },
    { icon: "logo", name: "Smart Lighting", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque eligendi velit tempora non dolores a. Quaerat accusantium excepturi non, possimus illum laboriosam eum suscipit culpa tenetur atque deserunt, nisi sit.", link : "Know More"},
    { icon: "logo", name: "Smart Parking", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque eligendi velit tempora non dolores a. Quaerat accusantium excepturi non, possimus illum laboriosam eum suscipit culpa tenetur atque deserunt, nisi sit.", link : "Know More" },
    { icon: "logo", name: "Smart Tracking", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque eligendi velit tempora non dolores a. Quaerat accusantium excepturi non, possimus illum laboriosam eum suscipit culpa tenetur atque deserunt, nisi sit.", link : "Know More" }
    ]
    this.getLogin();

    window.addEventListener('mouseup', function(event){
      var popup = document.getElementById("hamburger-accordion");
      var box1 = document.getElementById("hambox1");
      var box2 = document.getElementById("hambox2");
      var icon1 = document.getElementById("d-icon");
      var icon2 = document.getElementById("caret-icon");
      var hamicon = document.getElementById("ham-icon");
 
 
      if(event.target === hamicon){
       if(popup.style.display === "none"){
        popup.style.display = "flex";
       }  
 
       else if(popup.style.display !== "none"){
        popup.style.display = "none"
       }  
 
      }   
 
      else if(event.target !== popup && event.target !== icon1 && event.target !== icon2 &&  ( <HTMLElement>( <HTMLElement>event.target ).parentElement) !== box1 && ( <HTMLElement>( <HTMLElement>event.target ).parentElement) !== box2 && ( <HTMLElement>( <HTMLElement>event.target ).parentElement) !== popup){
        popup.style.display = "none";
      }   
 
    });  
   


  }

  ngOnInit() {
  }
  getLogin(){
    fetch('http://localhost:2000/lgItem/getAll')
     .then(res => { return res.json() })
     .then(res => 
      {
       this.login = this.login.concat(res.data);
      } )
     .catch(error => console.log('error'))
  }
  solutionopener() {
    var click1 = <HTMLElement>document.querySelector("#container");
    var button = <HTMLElement>document.querySelector(".solbtn");
    if (click1.style.display === "none") {
      click1.style.display = "flex";
      button.style.fontWeight = "bold";
      button.style.borderBottom = "2px solid #7EB226";
     
    } else {
      click1.style.display = "none";
      button.style.fontWeight = 'normal';
      button.style.borderBottom = "none";
    }

  }
  loginopener() {
    var click = <HTMLElement>document.querySelector(".containerx");
    var btn = <HTMLElement>document.querySelector(".loginBtn");
    var icon = <HTMLElement>document.querySelector("#dp");
    icon.classList.toggle("down");
    if (click.style.display === "none") {
      click.style.display = "block";
      btn.style.fontWeight = 'bold';
    }
    else if(click.style.display === "grid"){
      click.style.display = "block";
      btn.style.fontWeight = 'bold';
    }
    else {
      click.style.display = "none";
      btn.style.fontWeight = 'normal';
    }
  }
  

  dropdownfunc() {
    var accordianicon = document.getElementById("d-icon");
    accordianicon.classList.toggle("down");
    var caret = document.getElementById("caret-icon");
 
  }
  

  caretdown() {
    var caret = document.getElementById("caret-icon");
    caret.classList.toggle("down");
    var accordianicon = document.getElementById("d-icon");

  
  }



 @HostListener('document:click', ['$event'])
 onDocumentClick(event: MouseEvent) {
   if (!(event.target === <HTMLElement>document.querySelector(".loginBtn"))) {
     var d = <HTMLElement>document.querySelector(".containerx");
     var btn = <HTMLElement>document.querySelector(".loginBtn");
     if (d.style.display === "block") {
       var icon = <HTMLElement>document.querySelector("#dp");
       icon.classList.toggle("down");
       d.style.display = "none";
       btn.style.fontWeight = 'normal';
     }
   }
   var button = <HTMLElement>document.querySelector(".solbtn");
   if (!(event.target === <HTMLElement>document.querySelector(".solbtn"))) {
     var dropdown1 = <HTMLElement>document.querySelector("#container");
     if (dropdown1.style.display !== "none") {
       dropdown1.style.display = "none";
       button.style.fontWeight = 'normal';
       button.style.borderBottom = "none";
     }
   }

   
   
}
 

  

}
