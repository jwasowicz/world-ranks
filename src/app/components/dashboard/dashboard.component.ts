import { Component } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { SortInputComponent } from '../sort-input/sort-input.component';
import { RegionFilterComponent } from '../region-filter/region-filter.component';
import { CountryTableComponent } from '../country-table/country-table.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    SearchInputComponent,
    SortInputComponent,
    RegionFilterComponent,
    CountryTableComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
