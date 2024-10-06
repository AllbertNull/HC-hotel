import { Component } from '@angular/core';
import { CargarScriptsService } from '../../servicios/cargar-scripts.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
	constructor(private _CargarScripts:CargarScriptsService) {
		this._CargarScripts.Carga(["otp"]);
	}
}
