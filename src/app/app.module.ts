import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationComponent } from './components/location/location.component';
import { CharactersModule } from './components/home/characters.module';
import { EpisodeComponent } from './components/episode/episode.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LocationComponent,
    EpisodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CharactersModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
