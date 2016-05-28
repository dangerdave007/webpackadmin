import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { ApiService } from './shared';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { DashboardComponent } from './dashboard';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [ApiService],
  directives: [...ROUTER_DIRECTIVES, DashboardComponent],
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
})
@RouteConfig([
  {path: '/', component: HomeComponent, name: 'Home'},
  {path: '/About', component: AboutComponent, name: 'About'},
  {path: '/Dashboard', component: DashboardComponent, name: 'Dashboard'}
])
export class AppComponent {
  url = 'https://github.com/dangerdave007/webpackadmin';

  constructor(private api: ApiService) {
  }
}
