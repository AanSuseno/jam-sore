function isiWaktu() {
	var hour = new Date().getHours()
	var minute = new Date().getMinutes()

	document.querySelector('#hour').innerHTML = hour
	document.querySelector('#minute').innerHTML = minute
}