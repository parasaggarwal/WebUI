import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';

import { InfoComponent }   from './Vehicle/info/info.component';
import { DiagnosticComponent }   from './Vehicle/diagnostic/diagnostic.component';


import { MapComponent }          from './Vehicle/map/map.component';
import { LoginComponent }        from './login/login.component';

import { AppRoutingModule }       from './app-routing.module';
import { AgmCoreModule }          from 'angular2-google-maps/core';
import { DashboardComponent }     from './Dashboard/dashboard.component';
import { NguiAutoCompleteModule } from '@ngui/auto-complete'
import {HttpModule}               from '@angular/http';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NguiAutoCompleteModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA1Ec5vXTppW3OflLiOQtGUipfmjlaPPOo',
    })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    InfoComponent,
    DiagnosticComponent,
    MapComponent,
    LoginComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
