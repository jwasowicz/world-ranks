import { Component, input } from '@angular/core';

@Component({
  selector: 'app-country-row',
  imports: [],
  templateUrl: './country-row.component.html',
  styleUrl: './country-row.component.css',
})
export class CountryRowComponent {
  country = input.required<string>();
}
