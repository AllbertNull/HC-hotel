import { Component, OnInit } from '@angular/core';
import { RoomPrevComponent } from '../../components/room-prev/room-prev.component';
import { AddRoomComponent } from '../../components/add-room/add-room.component';
import { CargarScriptsService } from '../../servicios/cargar-scripts.service';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-hotel-admin',
	standalone: true,
	imports: [RoomPrevComponent, AddRoomComponent, RouterModule],
	templateUrl: './hotel-admin.component.html',
	styleUrl: './hotel-admin.component.css',
})
export class HotelAdminComponent implements OnInit{

	constructor(private _CargarScripts:CargarScriptsService) {
		_CargarScripts.Carga(["dropdown"]);
	}

	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}

}
