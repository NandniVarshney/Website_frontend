// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-careers',
//   templateUrl: './careers.component.html',
//   styleUrls: ['./careers.component.css']
// })
// export class CareersComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';






@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
})

export class CareersComponent implements OnInit, OnDestroy {

  panelOpenState: false;
  username:string="John";

  
  CareerForm: FormGroup;

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(2)
  ]);

  phoneFormControl = new FormControl("", [
    Validators.required,
    Validators.pattern('((\\+91-?)|0)?[0-9]{10}')
  ]);

  writeFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(2)
  ]);

  addressFormControl = new FormControl("", [
    Validators.required,
  ]);

  lnkdFormControl = new FormControl("",[
    Validators.required,
    Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
  ]);

  JobIdFormControl = new FormControl("",[
    Validators.required
  ]);

  resumeFormControl = new FormControl("",[
    Validators.required
  ]);




  public roles:any= [];
  constructor() {
    /*this.roles = [{
      Name:"Vinayak",
      Position: "Intern"
    }, {
      Name: "vin",
      Position: "In"
    },{
      Name: "v",
      Position: "I"
    }]
  }*/
    fetch('http://localhost:2000/roles/getall')
    .then(res => {return res.json()})
    .then(res => {
      this.roles = res.data;
      console.log('==>', this.roles);
    })
    .catch(error => console.log('ERROR'))
    
  }
    
  

  ngOnInit() {
    /*var acc = document.getElementsByClassName("accordion");
    var pan = document.getElementsByClassName("panel");
    var i=0;
    var j=0;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        
        
        if (this.nextElementSibling.style.display === "block") {
          this.nextElementSibling.style.display = "none";
        } 
        else{
          for(j=0; j<pan.length;j++){
            
            acc[i].nextElementSibling.style.display = "none";
            
          }
          this.nextElementSibling.style.display = "block";
        }
      });
    }
    
    
      function accordion(e) {
        e.stopPropagation();
        this.classList.toggle("active");
        var pane = this.nextElementSibling;
        if(pane.classList.display === "block"){
          pane.classList.display === "none";
        }
        else{
          for(i=0; i < acc.length; i++){
            pan[i].classList.remove("panel")
            
          }
          pane.classList.display === "block";
        }
      }
      for(i=0;i<acc.length;i++)
      {
        acc[i].addEventListener("mouseover", accordion);
      }*/
    
    console.log("----->");
  }



  ngOnDestroy(){
    console.log("=====> Calling form ng Destroy");
  }

}
