import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public featuredNews: any = [];
  public flagfeature : Boolean = true;
  public pressNews: any = [];
  public flagPress : Boolean = true;

  public month = ["","Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  constructor() 
  {
    this.loadFeature();
    this.loadPress();
  }

  ngOnInit() {
  }
  loadFeature()
  {
    fetch(`http://localhost:2000/news/load/${this.featuredNews.length}/6?flag=featured`)
     .then(res => { return res.json() })
     .then(res => 
      {
       this.featuredNews = this.featuredNews.concat(res.data);
       if(this.featuredNews.length==parseInt(res.info))
        {
          this.flagfeature=false;
   }

      } )
     .catch(error => console.log('error'))
}
loadPress()
  {
    fetch(`http://localhost:2000/news/load/${this.pressNews.length}/6?flag=press`)
     .then(res => { return res.json() })
     .then(res => 
      {
       this.pressNews = this.pressNews.concat(res.data);
       if(this.pressNews.length==parseInt(res.info))
        {
          this.flagPress=false;
   }

      } )
     .catch(error => console.log('error'))
}
}
