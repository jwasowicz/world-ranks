import { Component, effect, inject, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Country } from '../../models/country.model';
import { CountryFilterService } from '../../services/country-filter.service';

@Component({
  selector: 'app-country-info',
  imports: [],
  templateUrl: './country-info.component.html',
  styleUrl: './country-info.component.css',
})
export class CountryInfoComponent {
  private countryParam = inject(ActivatedRoute);
  private countryFilterService = inject(CountryFilterService);
  countryName = signal('');
  foundCountry = signal({
    common: '',
    official: '',
    population: 0,
    area: 0,
    capital: [''],
    subregion: '',
    language: {},
    currencies: {},
    continents: [''],
    neighbours: [''],
  });

  constructor() {
    effect(() => {
      if (this.countryFilterService.countries().length) {
        const foundCountry = this.countryFilterService
          .countries()
          .find(
            (country) =>
              country.name.common.toLowerCase() ===
              this.countryName().toLowerCase()
          )!;

        this.foundCountry.update((country) => {
          return {
            ...country,
            common: foundCountry.name.common,
            official: foundCountry.name.official,
            population: foundCountry.population,
            area: foundCountry.area,
            capital: foundCountry.capital,
            continents: foundCountry.continents,
            currencies: foundCountry.currencies,
            language: foundCountry.languages,
            neighbours: foundCountry.borders,
            subregion: foundCountry.subregion,
          };
        });

        console.log(foundCountry);
      }
    });
  }

  ngOnInit() {
    this.countryParam.paramMap.subscribe((params) => {
      const name = params.get('countryName');
      if (name) {
        this.countryName.set(name);
      }
    });
  }
}
