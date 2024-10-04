import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
	providedIn: 'root',
  })
  export class CargarScriptsService {

	constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

	Carga(archivos: string[]) {
	  // Verificar si estamos en el entorno del navegador
	  if (isPlatformBrowser(this.platformId)) {
		for (let archivo of archivos) {
		  const scriptSrc = `./assets/js/${archivo}.js`;
		  if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
			let script = document.createElement("script");
			script.src = scriptSrc;
			script.onload = () => console.log(`${archivo} cargado correctamente.`);
			script.onerror = () => console.error(`Error al cargar ${archivo}.`);
			document.body.appendChild(script);
		  }
		}
	  }
	}
  }
