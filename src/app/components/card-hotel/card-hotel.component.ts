import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-card-hotel',
	standalone: true,
	imports: [],
	templateUrl: './card-hotel.component.html',
	styleUrl: './card-hotel.component.css'
})
export class CardHotelComponent {
	habitacion: string = 'Habitación simple para 1 persona, cama matrimonial, wi-fi y aire acondicionado';
	precio: number = 400;
	moneda = ['MX', 'JP', 'US'];
	landingMain = '../assets/img/encabezado.jpg';
	cardImage = {
		imgRoom1: './assets/img/habitacion1.jpg',
		imgRoom2: './assets/img/habitacion2.jpg',
		imgRoom3: './assets/img/habitacion3.jpg',
		imgRoom4: '../assets/img/habitacion4.jpg',
	}

}

