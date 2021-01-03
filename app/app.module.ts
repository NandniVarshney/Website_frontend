import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { AppComponent } from './app.component';
import { AboutusComponent } from './layout/aboutus/aboutus.component';
import { CareersComponent } from './layout/careers/careers.component';
import { ContactusComponent } from './layout/contactus/contactus.component';
import { EventsComponent } from './layout/events/events.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomepageComponent } from './layout/homepage/homepage.component';
import { NewsComponent } from './layout/news/news.component';
import { BlogsComponent } from './layout/blogs/blogs.component';
import { BlogDetailsComponent } from './layout/blogs/blog-details/blog-details.component';
import { DigitizeComponent } from './layout/homepage/digitize/digitize.component';
import { IntroComponent } from './layout/homepage/intro/intro.component';
import { ServicesComponent } from './layout/homepage/services/services.component';
import { StayingComponent } from './layout/homepage/staying/staying.component';
import { ConnectingDevicesComponent} from './layout/homepage/connecting-devices/connecting-devices.component';
import { ConnectingDevice2Component} from './layout/homepage/connecting-device2/connecting-device2.component';
import { SubHeaderComponent} from './layout/sub-header/sub-header.component';
import { AppRoutingModule } from './app-routing.module';
import {SharedModule} from './component/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule, MatSnackBarModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { CareerFormComponent } from './layout/careers/career-form/career-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    CareersComponent,
    ContactusComponent,
    EventsComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    NewsComponent,
    BlogsComponent,
    BlogDetailsComponent,
    DigitizeComponent,
    IntroComponent,
    ServicesComponent,
    StayingComponent,
    ConnectingDevicesComponent,
    ConnectingDevice2Component,
    SubHeaderComponent,
    CareerFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId :'senra-website'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,

    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MaterialFileInputModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string)
     {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
    }
 }
