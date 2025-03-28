import { Component, computed, inject } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { SortInputComponent } from '../sort-input/sort-input.component';
import { RegionFilterComponent } from '../region-filter/region-filter.component';
import { CountryTableComponent } from '../country-table/country-table.component';
import { CountryFilterService } from '../../services/country-filter.service';
import { StatusInputComponent } from '../status-input/status-input.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    SearchInputComponent,
    SortInputComponent,
    RegionFilterComponent,
    CountryTableComponent,
    StatusInputComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  private countryFilterService = inject(CountryFilterService);
  isFiltered = this.countryFilterService.isFiltered;
  filteredCountries = this.countryFilterService.filteredCountries;
  countries = this.countryFilterService.countries;
}
