import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent }   from './Vehicle/info/info.component';
import { DiagnosticComponent }   from './Vehicle/diagnostic/diagnostic.component';
import { LoginComponent }   from './login/login.component';
import { MapComponent }   from './Vehicle/map/map.component';
import { DashboardComponent } from './Dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'vehicle-info',  component: InfoComponent },
  { path: 'vehicle-diagnostic',  component: DiagnosticComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'vehicle-map',  component: MapComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
