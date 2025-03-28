import { Component, inject } from '@angular/core';
import { CountryFilterService } from '../../services/country-filter.service';

@Component({
  selector: 'app-sort-input',
  imports: [],
  templateUrl: './sort-input.component.html',
  styleUrl: './sort-input.component.css',
})
export class SortInputComponent {
  private countryFilterService = inject(CountryFilterService);

  sortCountries(e: Event) {
    this.countryFilterService.isFiltered.set(true);
    const target = e.target as HTMLSelectElement;
    this.countryFilterService.sortBy(target.value);
  }
}
