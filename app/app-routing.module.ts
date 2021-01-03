// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { EventsComponent} from './layout/events/events.component';
import { AboutusComponent} from './layout/aboutus/aboutus.component';
import { CareersComponent} from './layout/careers/careers.component';
import { ContactusComponent} from './layout/contactus/contactus.component';
import { HomepageComponent } from './layout/homepage/homepage.component';
import { BlogsComponent } from './layout/blogs/blogs.component';
import { BlogDetailsComponent } from './layout/blogs/blog-details/blog-details.component';
import { NewsComponent } from './layout/news/news.component';


const routes : Routes =[
  {path: 'events' , component: EventsComponent},
  {path: 'aboutUs' , component: AboutusComponent},
  {path: 'careers' , component: CareersComponent},
  {path: 'contactUs' , component: ContactusComponent},
  {
    path: 'blogs' , 
    component: BlogsComponent,
        // children:
        // [
        //   {
        //     path: ':_id', 
        //     component: BlogDetailsComponent
        //   }]
    },
  {path: 'blogs/:_id' , component: BlogDetailsComponent},
  {path: 'news' , component: NewsComponent},
  {path: '' , component: HomepageComponent}
  
];
// RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [EventsComponent , AboutusComponent , CareersComponent, ContactusComponent , HomepageComponent , BlogsComponent , BlogDetailsComponent , NewsComponent]