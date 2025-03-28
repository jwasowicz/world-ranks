import { Component, inject, signal } from '@angular/core';
import { ChangeI } from '../../models/country.model';
import { CountryFilterService } from '../../services/country-filter.service';

@Component({
  selector: 'app-status-input',
  imports: [],
  templateUrl: './status-input.component.html',
  styleUrl: './status-input.component.css',
})
export class StatusInputComponent {
  private countryFilterService = inject(CountryFilterService);

  handleChange(value: ChangeI) {
    const { independent, member } = value;

    const filterValues = signal({
      independent: independent ?? false,
      member: member ?? false,
    });

    this.countryFilterService.filterByStatus(filterValues());
  }
}
