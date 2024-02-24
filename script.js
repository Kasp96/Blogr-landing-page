const nav = document.querySelector('.nav-container');
const navBtns = document.querySelectorAll('.nav-btn');
const arrows = document.querySelectorAll('.arrow');
const liItems = document.querySelectorAll('.navbar ul li');
const subMenus = document.querySelectorAll('.submenu');

navBtns.forEach((btn) =>
	btn.addEventListener('click', () => {
		nav.classList.toggle('active');
		navBtns[0].classList.toggle('hide');
		navBtns[1].classList.toggle('show');
	})
);

liItems.forEach((item, index) =>
	item.addEventListener('click', () => {
		if (window.innerWidth >= 992) {
			const isVisible = subMenus[index].classList.contains('sub-show');
			subMenus.forEach((submenu) => {
				submenu.classList.remove('sub-show');
			});
			arrows.forEach((arrow) => {
				arrow.classList.remove('rotate');
			});
			if (!isVisible) {
				subMenus[index].classList.add('sub-show');
				arrows[index].classList.add('rotate');
			}
		} else {
			arrows[index].classList.toggle('rotate');
			subMenus[index].classList.toggle('sub-show');
		}
	})
);
