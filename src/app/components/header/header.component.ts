import { Component, inject, input } from '@angular/core';
import { CountryFilterService } from '../../services/country-filter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  router = inject(Router);
}
