import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiDemoService {

	constructor(private httpClient: HttpClient) { }

	getHabitaciones(): Observable<any> {
	return this.httpClient.get<any>('./assets/hotel.api.json')};
}
