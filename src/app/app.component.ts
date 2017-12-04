import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();
  visible = false;

  navLinks: Object = [
    {
      label: 'Dashboard',
      path: '/dashboard'
    },
    {
      label: 'Heroes',
      path: '/heroes'
    },

  ];

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
    console.log('!');
  }

  ngOnInit() {
    this.heroes = this.searchTerms
      .debounceTime(300).distinctUntilChanged()
      .switchMap(term => {
        console.log(term);
        return term
        ? this.heroSearchService.search(term)
        : Observable.of<Hero[]>([]);
      })
      .catch(error => {
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  gotoDetail(hero: Hero): void {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }

}
