import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CountryFilterService } from './services/country-filter.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'world-raaks';

  private countryFilterService = inject(CountryFilterService);

  ngOnInit() {
    this.countryFilterService.loadCountries();
  }
}
