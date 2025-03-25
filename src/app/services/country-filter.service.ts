import { inject, Injectable, signal } from '@angular/core';
import { Country } from '../models/country.model';
import { HttpClient } from '@angular/common/http';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryFilterService {
  countries = signal<Country[]>([]);
  private httpClient = inject(HttpClient);

  sortCountryByRegion(region: string) {
    const api = `https://restcountries.com/v3.1/region/${region.toLowerCase()}`;

    this.httpClient.get<Country[]>(api).subscribe((countries) => {
      if (countries) {
        this.countries.set(countries);
      }
    });

    console.log(this.countries());
  }

  getCountries() {
    return this.countries;
  }
}
