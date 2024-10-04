let select = document.getElementById('roomSelect');
let menu = document.getElementById('dropmenu');
let options = document.querySelectorAll('#dropmenu li');
let selected = document.querySelector('.selected');

let btnSwitch = document.querySelector('.btn-switch');
let dotSwitch = document.querySelector('.dotSwitch');
let input = document.querySelector('.checkbox');


function boton() {
	select.classList.toggle('select-clicked');
	menu.classList.toggle('menu-open');

	options.forEach(option => {
		option.addEventListener('click', () => {
			selected.innerText = option.innerText;
			select.classList.remove('select-clicked');
			menu.classList.remove('menu-open');
			options.forEach(option => {
				option.classList.remove('active');
			});
			option.classList.add('active');
		});
	});
};

function change() {
	dotSwitch.classList.toggle('swipe');
	if(dotSwitch.classList.contains('swipe')) {
		btnSwitch.setAttribute('data-state', 'checked');
		btnSwitch.setAttribute('aria-checked', 'true');
		input.setAttribute('checked', '');
	} else {
		btnSwitch.setAttribute('data-state', 'unchecked');
		btnSwitch.setAttribute('aria-checked', 'false');
		input.removeAttribute('checked', '');
	}
}
