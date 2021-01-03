import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css', './intro.arrow.css']
})

export class IntroComponent implements OnInit {
    public input = document.getElementById("input");
    public info = [];
    public flag = false;

    constructor() {
    }

    ngOnInit() {
    }

    search() {
        fetch(`https://api.github.com/search/users?q=${this.userName}`)
            .then(res => { return res.json() })
            .then(res => {
                this.info = res.items[0];
                this.flag = true;
                console.log(this.userName);
                console.log(this.info);
            })
            .catch(error => console.log('error'))

    }
}