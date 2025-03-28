import { Component, inject, signal } from '@angular/core';
import { CountryFilterService } from '../../services/country-filter.service';

@Component({
  selector: 'app-region-filter',
  imports: [],
  templateUrl: './region-filter.component.html',
  styleUrl: './region-filter.component.css',
})
export class RegionFilterComponent {
  regions = signal([
    'Americas',
    'Antarctic',
    'Africa',
    'Asia',
    'Europe',
    'Oceania',
  ]);

  private countryFilterService = inject(CountryFilterService);

  changeRegion(region: string) {
    this.countryFilterService.isFiltered.set(true);
    this.countryFilterService.sortCountryByRegion(region);
  }
}
