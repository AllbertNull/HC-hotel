export interface Reservaciones {
	id_reservacion: Number;
	id_cuarto: Number;
	nombre_cliente: String;
	ingreso: String;
	salida: String;
	email_cliente: String;
	cantidad_huespedes: Number;
	comentarios_especiales: [];
	codigo_promocional: String;
	activo: boolean;
}

export interface Habitaciones {
	numero_cuarto: Number;
	tipo_cuarto: [];
	precio: Number;
	disponible: boolean;
}
