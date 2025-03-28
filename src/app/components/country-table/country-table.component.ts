import { Component, computed, effect, inject, signal } from '@angular/core';
import { CountryRowComponent } from './country-row/country-row.component';
import { CountryFilterService } from '../../services/country-filter.service';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-country-table',
  imports: [CountryRowComponent],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css',
})
export class CountryTableComponent {
  private countryFilterService = inject(CountryFilterService);
  isFiltered = this.countryFilterService.isFiltered;
  countries = this.countryFilterService.countries;
  filteredCountries = this.countryFilterService.filteredCountries;
}
