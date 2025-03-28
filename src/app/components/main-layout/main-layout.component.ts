import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
  imports: [HeaderComponent, DashboardComponent, RouterModule],
})
export class MainLayoutComponent {}
