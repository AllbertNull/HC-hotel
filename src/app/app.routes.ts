import { Routes } from '@angular/router';
import { HotelAdminComponent } from './pages/hotel-admin/hotel-admin.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
	{path: '', component: LandingComponent},
	{path: 'admin', component: HotelAdminComponent},
	{path: 'reservation', component: ReservationComponent},
	{path: 'login', component: LoginComponent,
		children: [
			{path: 'admins', redirectTo: 'admin'}
		]
	},
	{path: '**', redirectTo: ''}
];
