// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Gaurav\'s first Angular app';
// }
import {Component} from '@angular/core'
@Component({
 selector:'pm-root',
  template: '<div> <pm-products></pm-products> </div>'
})

export class AppComponent{
  pageTitle: string ='ACME product Mgmt'
 
}