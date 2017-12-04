import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesService } from './heroes.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';

import { Hero } from './hero';
import { AppRoutingModule } from './app-routing.module';
import { HeroSearchService } from './hero-search.service';
import { AddHeroComponent } from './add-hero/add-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroesComponent,
    DashboardComponent,
    EditHeroComponent,
    AddHeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot( InMemoryDataService ),
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    HeroesService,
    HeroSearchService
  ],
  //declares components that dynanically created
  entryComponents: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
