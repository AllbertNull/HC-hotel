import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { HotelAdminComponent } from './pages/hotel-admin/hotel-admin.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, LandingComponent, HotelAdminComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'hc-hotel';
}
