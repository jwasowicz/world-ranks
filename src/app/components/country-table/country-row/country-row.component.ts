import { Component, inject, input } from '@angular/core';
import { Country } from '../../../models/country.model';
import { Router } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country-row',
  imports: [DecimalPipe],
  templateUrl: './country-row.component.html',
  styleUrl: './country-row.component.css',
})
export class CountryRowComponent {
  data = input.required<Country>();
  router = inject(Router);

  checkCountryInfo(countryName: string) {
    this.router.navigate(['/country', countryName]);
  }
}
