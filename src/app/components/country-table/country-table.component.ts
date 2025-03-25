import { Component, inject, signal } from '@angular/core';
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
  countries = signal<Country[]>([]);

  ngOnInit() {
    this.countries.set(this.countryFilterService.getCountries()());
  }
}
