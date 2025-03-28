import { Routes } from '@angular/router';
import { CountryInfoComponent } from './components/country-info/country-info.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'country/:countryName',
    component: CountryInfoComponent,
  },
];
