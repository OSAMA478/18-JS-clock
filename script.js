const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const hourDig = document.querySelector(".hour-digit");
const minDig = document.querySelector(".min-digit");
const secDig = document.querySelector(".sec-digit");

const days = document.querySelector(".dayy");
const months = document.querySelector(".month");
const years = document.querySelector(".year");

const dark = document.querySelector(".rotate-div");
const root = document.documentElement;
const body = document.querySelector("body");

dark.addEventListener("click", (e) => {
	dark.classList.toggle("rotate");
	root.classList.toggle("dark");
	body.classList.toggle("dark");
});

setInterval(() => {
	let day = new Date();
	let hh = day.getHours();
	let mm = day.getMinutes();
	let ss = day.getSeconds();
	let ms = day.getMilliseconds();

	let hhDeg = hh * 30;
	let mmDeg = mm * deg;
	let ssDeg = ss * deg;
	let msDeg = ms / 166.6666667;

	let date = day.getDate();
	let month = day.getMonth() + 1;
	let year = day.getFullYear();

	hour.style.transform = `translate(-50%, -50%) rotateZ(${
		hhDeg + mmDeg / 12
	}deg)`;
	min.style.transform = `translate(-50%, -50%) rotateZ(${
		mmDeg + ssDeg / 60
	}deg)`;
	sec.style.transform = `translate(-50%, -50%) rotateZ(${ssDeg + msDeg}deg)`;

	hourDig.innerText = hh;
	minDig.innerText = mm;
	secDig.innerText = ss;

	days.innerText = date;
	months.innerText = month;
	years.innerText = year;
}, 100);
