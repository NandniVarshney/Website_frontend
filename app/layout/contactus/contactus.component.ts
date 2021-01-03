import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {


  public contactUs: FormGroup;
  public buttonText = "Submit";


  constructor(private snackBar: MatSnackBar) {
    this.contactUs = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),

      name: new FormControl("", [
        Validators.required,
        Validators.minLength(2)
      ]),

      phone: new FormControl("", [
        Validators.required
      ]),
      message: new FormControl("", [
        Validators.required,
        Validators.minLength(2)
      ])
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    fetch('http://localhost:2000/contactus/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.contactUs.value.name,
        message: this.contactUs.value.message,
        email: this.contactUs.value.email,
        phone: this.contactUs.value.phone

      })
    })
      .then(res => {
        this.buttonText = "Submitted";
        this.snackBar.open("Form successfully submitted!", 'Dismiss', { duration: 5000 });
      })
      .catch(error => console.log(error));

    fetch('http://localhost:2000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.contactUs.value.name,
        message: this.contactUs.value.message,
        email: this.contactUs.value.email,
        phone: this.contactUs.value.phone

      })
    })
      .then(res => {
        return res.json()
      })
      .then(data => console.log(data))
      .catch(error => console.log('err'))
  }
}
