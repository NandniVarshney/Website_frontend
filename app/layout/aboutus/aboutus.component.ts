import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})



export class AboutusComponent implements OnInit, OnDestroy {

  public employeeDetails: any = [];
  constructor() {
    fetch('http://localhost:2000/employees/getall')
    .then(res => { return res.json() })
      .then(res => {
        this.employeeDetails = res.data;
        console.log('=========>', this.employeeDetails);
      })
      .catch(error => console.log('error'))
  }
  ngOnInit() {
    console.log("==> call");
  }
  
  
  ngOnDestroy() {
    console.log("=====> Calling form ng Destroy");
  }

}


  