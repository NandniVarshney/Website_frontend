import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

   public blogs: any = [];
   public news: any = [];
   public flagNew : Boolean = true;
   public month = ["","Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

   constructor() {
    this.loadMore();
    this.loadNews();
 }

 ngOnInit() {
 }
 loadMore() {
   fetch(`http://localhost:2000/Blogs/load/${this.blogs.length}/6`)
     .then(res => { return res.json() })
     .then(res => 
      {
       this.blogs = this.blogs.concat(res.data);
       if(this.blogs.length==parseInt(res.info))
        {
          this.flagNew=false;
        }

      } )
     .catch(error => console.log('error'))
 }
 loadNews()
 {
  fetch(`http://localhost:2000/news/load/${this.news.length}/3?flag=press`)
  .then(res => { return res.json() })
  .then(res => 
  {
    this.news = this.news.concat(res.data);
  } )
  .catch(error => console.log('error'))
}

 }