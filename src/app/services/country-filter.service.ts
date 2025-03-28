import { computed, inject, Injectable, signal } from '@angular/core';
import { ChangeI, Country } from '../models/country.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryFilterService {
  countries = signal<Country[]>([]);
  filteredCountries = signal<Country[]>([]);
  isFiltered = signal(false);

  filteredState = signal({
    region: '',
    sortValue: 'population',
    inputValue: '',
    filterValues: {
      member: false,
      independent: false,
    },
  });

  private httpClient = inject(HttpClient);

  loadCountries() {
    this.httpClient
      .get<Country[]>('https://restcountries.com/v3.1/all')
      .subscribe((countries) => {
        this.countries.set(countries);
        this.applyFilters();
      });
  }
  private applyFilters() {
    const { region, sortValue, inputValue, filterValues } =
      this.filteredState();
    let result = [...this.countries()];

    if (region) {
      result = result.filter((c) => c.region === region);
    }

    if (inputValue) {
      const search = inputValue.toLowerCase();
      result = result.filter((c) =>
        c.name.common.toLowerCase().includes(search)
      );
    }

    if (sortValue) {
      result = result.sort((a, b) => {
        switch (sortValue.toLowerCase()) {
          case 'name':
            return a.name.common.localeCompare(b.name.common);
          case 'population':
            return a.population - b.population;
          case 'area':
            return a.area - b.area;
          default:
            return 0;
        }
      });
    }

    if (filterValues.member) {
      result = result.filter((c) => c.unMember);
    }

    if (filterValues.independent) {
      result = result.filter((c) => c.independent);
    }

    this.filteredCountries.set(result);
    this.isFiltered.set(
      region !== '' ||
        sortValue !== '' ||
        inputValue !== '' ||
        filterValues.member ||
        filterValues.independent
    );
  }

  sortCountryByRegion(region: string) {
    this.filteredState.update((state) => ({ ...state, region }));
    this.applyFilters();
  }

  sortBy(sortValue: string) {
    this.filteredState.update((state) => ({ ...state, sortValue }));
    this.applyFilters();
  }

  searchByInput(text: string) {
    this.filteredState.update((state) => ({ ...state, inputValue: text }));
    this.applyFilters();
  }

  filterByStatus(filterValues: ChangeI) {
    this.filteredState.update((state) => ({
      ...state,
      filterValues: {
        member: filterValues.member ?? false,
        independent: filterValues.independent ?? false,
      },
    }));
    this.applyFilters();
  }
}
