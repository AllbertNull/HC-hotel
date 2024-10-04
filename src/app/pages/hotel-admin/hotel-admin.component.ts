import { Component } from '@angular/core';
import { RoomPrevComponent } from '../../components/room-prev/room-prev.component';
import { AddRoomComponent } from '../../components/add-room/add-room.component';

@Component({
	selector: 'app-hotel-admin',
	standalone: true,
	imports: [RoomPrevComponent, AddRoomComponent],
	templateUrl: './hotel-admin.component.html',
	styleUrl: './hotel-admin.component.css',
})
export class HotelAdminComponent {}
