import { Component } from '@angular/core';
import { CargarScriptsService } from '../../servicios/cargar-scripts.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
	constructor(private _CargarScripts:CargarScriptsService) {
		this._CargarScripts.Carga(["otp"]);
	}
}
