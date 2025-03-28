import { Component, inject } from '@angular/core';
import { CountryFilterService } from '../../services/country-filter.service';

@Component({
  selector: 'app-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
})
export class SearchInputComponent {
  private countryFilterService = inject(CountryFilterService);

  handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.countryFilterService.isFiltered.set(true);
    this.countryFilterService.searchByInput(target.value);
  }
}
