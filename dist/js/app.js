const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.querySelector('#toggle-icon');

// dark mode function
const darkMode = () => {
	toggleIcon.children[0].textContent = 'Dark Mode';
	toggleIcon.children[0].style.color = '#fff';
	toggleIcon.children[0].style.fontSize = '1rem';
};
//light mode function
const lightMode = () => {
	toggleIcon.children[0].textContent = 'Light Mode';
	toggleIcon.children[0].style.color = 'hsl(228, 12%, 44%)';
};
// switch theme function
const switchTheme = (event) => {
	if (event.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
		darkMode();
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
		lightMode();
	}
};
// save to local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
	document.documentElement.setAttribute('data-theme', currentTheme);
	if (currentTheme === 'dark') {
		toggleSwitch.checked = true;
		darkMode();
	}
}
// toggle event
toggleSwitch.addEventListener('change', switchTheme);
