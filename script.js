const deg = 6;

const root = document.documentElement;

const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const hourDig = document.querySelector(".hour-digit");
const minDig = document.querySelector(".min-digit");
const secDig = document.querySelector(".sec-digit");

const days = document.querySelector(".dayy");
const months = document.querySelector(".month");
const years = document.querySelector(".year");

const rotate = document.querySelector(".rotate-div");
const body = document.querySelector("body");

rotate.addEventListener("click", (e) => {
	rotate.classList.toggle("rotate");
	root.classList.toggle("dark");
	body.classList.toggle("dark");
});

setInterval(() => {
	const day = new Date();
	const hh = day.getHours();
	const mm = day.getMinutes();
	const ss = day.getSeconds();
	const ms = day.getMilliseconds();

	const hhDeg = hh * 30;
	const mmDeg = mm * deg;
	const ssDeg = ss * deg;
	const msDeg = ms / 166.6666667;

	const date = day.getDate();
	const month = day.getMonth() + 1;
	const year = day.getFullYear();

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
