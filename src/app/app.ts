/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import * as Firebase from 'firebase';

import {Title} from './providers/title';
import {XLarge} from './directives/x-large';
import {Home} from './home/home';


@Component({

  selector: 'app',
  providers: [ ...FORM_PROVIDERS],
  directives: [ ...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [``],
  template: `
    <header>
      <h1 class="title">Hello {{ title }}</h1>
      <nav>
        <a [routerLink]=" ['Home']">Home</a>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>
  `
})

@RouteConfig([
  { path: '/', component: Home, name: 'Home' }
])

export class App {
  title: string = 'World';
  constructor() {
    let a = new Firebase('https://angular-irc.firebaseio.com');
  }
}
