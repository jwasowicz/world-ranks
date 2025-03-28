import { Routes } from '@angular/router';
import { CountryInfoComponent } from './components/country-info/country-info.component';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { CountryLayoutComponent } from './components/country-layout/country-layout.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
    ],
  },
  {
    path: 'country/:countryName',
    component: CountryInfoComponent,
  },
];
