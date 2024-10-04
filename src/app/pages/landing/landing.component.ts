import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardHotelComponent } from '../../components/card-hotel/card-hotel.component';
import { ApiDemoService } from '../../servicios/api-demo.service';
import { CargarScriptsService } from '../../servicios/cargar-scripts.service';

@Component({
	selector: 'app-landing',
	standalone: true,
	imports: [RouterOutlet, CardHotelComponent],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit{


	constructor( private apiService:ApiDemoService, private _CargarScripts:CargarScriptsService) {
		_CargarScripts.Carga(["dropdown"]);
	}

	ngOnInit(): void {
		this.apiService.getHabitaciones().subscribe({next:(data) => {
			console.log(data.tipos_cuarto);
		},error:(error) => {
			console.log(error)
		}});
	}
}
