function pobierzPorade() {
	return new Promise((resolve, reject) => {
		let porada = null;
		porada = fetch('https://api.adviceslip.com/advice')
		if (porada) {
			resolve(porada)
		} else {
			reject(new Error('Brak porady z internetu'))
		}
	})
}

function pobierzTempZMicroSoft(){
	return new Promise((resolve, reject) => {
		let temperatura = null;
		temperatura = 20;
		if (temperatura){resolve(temperatura)}
		else {reject('nie ma danych temperatury')}
	})}

async function pobierzDaneZInternetu(){
	const porada = await pobierzPorade();
	const poradaJson = await porada.json();
	const temperatura = await pobierzTempZMicroSoft();
	console.log(poradaJson.slip)
	console.log(temperatura);

}

pobierzDaneZInternetu();


