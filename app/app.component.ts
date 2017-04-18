import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `   
   <!-- <nav>
      &lt;!&ndash;<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>&ndash;&gt;
      
      <a routerLink="/vehicle-info" routerLinkActive="active">Vehicle-Info</a>
      <a routerLink="/vehicle-diagnostic" routerLinkActive="active">Vehicle-Diagnostic</a>
      
      <a routerLink="/login" routerLinkActive="active">Login</a>
      <a routerLink="/vehicle-map" routerLinkActive="active">Vehicle-Map</a>
      
    </nav>-->
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

}
