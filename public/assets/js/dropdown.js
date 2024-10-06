var select = document.getElementById('roomSelect');
var menu = document.getElementById('dropmenu');
var options = document.querySelectorAll('#dropmenu li');
var selected = document.querySelector('.selected');

var btnSwitch = document.querySelector('.btn-switch');
var dotSwitch = document.querySelector('.dotSwitch');
var input = document.querySelector('.checkbox');


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
