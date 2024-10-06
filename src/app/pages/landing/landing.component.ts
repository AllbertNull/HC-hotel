import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardHotelComponent } from '../../components/card-hotel/card-hotel.component';
import { ApiDemoService } from '../../servicios/api-demo.service';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
	selector: 'app-landing',
	standalone: true,
	imports: [RouterOutlet, CardHotelComponent, HeaderComponent],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit{

	constructor(private apiService:ApiDemoService){}
	ngOnInit(): void {
		this.apiService.getHabitaciones().subscribe({next:(data) => {
		},error:(error) => {
			console.log(error)
		}});
	}
}
