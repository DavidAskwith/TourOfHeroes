import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MaterialModule } from './material.module';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { AddHeroComponent } from './add-hero/add-hero.component';

import { Hero } from './hero';
import { AppRoutingModule } from './app-routing.module';
import { HeroSearchService } from './hero-search.service';
import { OverlayService } from './overlay.service';
import { HeroesService } from './heroes.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot( InMemoryDataService ),
    AppRoutingModule,
    MaterialModule,
    OverlayModule
  ],
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroesComponent,
    DashboardComponent,
    EditHeroComponent,
    AddHeroComponent
  ],
  providers: [
    HeroesService,
    HeroSearchService,
    OverlayService
  ],
  // geclares components that dynanically created
  entryComponents: [
    AddHeroComponent,
    HeroDetailsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
