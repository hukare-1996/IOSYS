import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { DisordersComponent } from './disorders/disorders.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { QuotesComponent } from './quotes/quotes.component';
import { RagistrationComponent } from './ragistration/ragistration.component';
import { HelpComponent } from './help/help.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StoryComponent } from './story/story.component';
import { WatchvideoComponent } from './watchvideo/watchvideo.component';
import { GmapComponent } from './gmap/gmap.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DisordersComponent,
    SponsorsComponent,
    QuotesComponent,
    RagistrationComponent,
    HelpComponent,
    StatisticsComponent,
    StoryComponent,
    WatchvideoComponent,
    GmapComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
