import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
	selector: 'app-card-hotel',
	standalone: true,
	imports: [RouterModule,RouterLink],
	templateUrl: './card-hotel.component.html',
	styleUrl: './card-hotel.component.css'
})
export class CardHotelComponent {
	habitacion: string = 'Habitación simple para 1 persona, cama matrimonial, wi-fi y aire acondicionado';
	precio: number = 400;
	moneda = ['MX', 'JP', 'US'];
	cardImage = {
		imgRoom1: './assets/img/habitacion1.jpg',
		imgRoom2: './assets/img/habitacion2.jpg',
		imgRoom3: './assets/img/habitacion3.jpg',
		imgRoom4: '../assets/img/habitacion4.jpg',
	}

}

