import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-career-form',
  templateUrl: './career-form.component.html',
  styleUrls: ['./career-form.component.css']
})
export class CareerFormComponent implements OnInit {

   
  panelOpenState: false;
  username:string="John";

  public CareerForm: FormGroup;


  constructor() { 
    this.CareerForm = new FormGroup({

      emailFormControl : new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      
      nameFormControl : new FormControl("", [
        Validators.required,
        Validators.minLength(2)
      ]),
    
    
      phoneFormControl : new FormControl("", [
        Validators.required,
        Validators.pattern('((\\+91-?)|0)?[0-9]{10}')
      ]),
    
      writeFormControl : new FormControl("", [
        Validators.required,
        Validators.minLength(2)
      ]),
    
    
      addressFormControl : new FormControl("", [
        Validators.required,
      ]),
    
      lnkdFormControl : new FormControl("",[
        Validators.required,
        Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
      ]),
    
      JobIdFormControl : new FormControl("",[
        Validators.required
      ]),
    
    
      resumeFormControl : new FormControl("",[
        Validators.required
      ])
    });
 
  }

  ngOnInit() {
    
  }

}
