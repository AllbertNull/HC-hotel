import { Routes } from '@angular/router';
import { HotelAdminComponent } from './pages/hotel-admin/hotel-admin.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AddRoomComponent } from './components/add-room/add-room.component';

export const routes: Routes = [
	{path: '', component: LandingComponent},
	{
		path: 'admin', component: HotelAdminComponent,
		children: [
			{path:'cuarto', component: AddRoomComponent},
		]
	}
];
