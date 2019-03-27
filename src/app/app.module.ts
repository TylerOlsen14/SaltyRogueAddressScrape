import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrapeComponent } from './scrape/scrape.component';
import { ExamsApiService } from './exams/exams-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ScrapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ExamsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
