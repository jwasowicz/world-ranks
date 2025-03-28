import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CountryInfoComponent } from '../country-info/country-info.component';

@Component({
  selector: 'app-country-layout',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './country-layout.component.html',
  styleUrl: './country-layout.component.css',
})
export class CountryLayoutComponent {}
