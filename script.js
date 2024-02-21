const nav = document.querySelector('.nav-container');
const navBtns = document.querySelectorAll('.nav-btn');
const arrows = document.querySelectorAll('.arrow');
const liItems = document.querySelectorAll('.navbar ul li');
const subMenus = document.querySelectorAll('.submenu');
const body = document.querySelector('body');

navBtns.forEach((btn) =>
	btn.addEventListener('click', () => {
		nav.classList.toggle('active');
		if (nav.classList.contains('active')) {
			body.classList.add('stop-scroll');
		} else {
			body.classList.remove('stop-scroll');
		}
		navBtns[0].classList.toggle('hide');
		navBtns[1].classList.toggle('show');
	})
);

liItems.forEach((item, index) =>
	item.addEventListener('click', () => {
		arrows[index].classList.toggle('rotate');
		subMenus[index].classList.toggle('sub-show');
	})
);
