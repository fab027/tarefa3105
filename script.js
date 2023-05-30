function converterTemperaturas() {
    var temperatura = document.getElementById('temperatura').value;
    if (temperatura === '') {
        alert('Você precisa digitar uma temperatura!');
        return;
    }

    // Verifica se a temperatura contém mais de um símbolo "+" ou "-"
    var countPlus = (temperatura.match(/\+/g) || []).length;
    var countMinus = (temperatura.match(/\-/g) || []).length;
    if (countPlus > 1 || countMinus > 1) {
        alert('A temperatura deve conter apenas um símbolo "+" ou "-".');
        return;
    }

    var escalas = document.getElementsByName('escala');
    var escalaSelecionada = '';

    for (var i = 0; i < escalas.length; i++) {
        if (escalas[i].checked) {
            escalaSelecionada = escalas[i].value;
            break;
        }
    }

    var tempCelsius, tempFahrenheit, tempKelvin;

    if (escalaSelecionada === 'celsius') {
        tempCelsius = parseFloat(temperatura);
        tempFahrenheit = (tempCelsius * 9 / 5) + 32;
        tempKelvin = tempCelsius + 273.15;
    } else if (escalaSelecionada === 'fahrenheit') {
        tempFahrenheit = parseFloat(temperatura);
        tempCelsius = (tempFahrenheit - 32) * 5 / 9;
        tempKelvin = tempCelsius + 273.15;
    } else if (escalaSelecionada === 'kelvin') {
        tempKelvin = parseFloat(temperatura);
        tempCelsius = tempKelvin - 273.15;
        tempFahrenheit = (tempCelsius * 9 / 5) + 32;
    }

    document.getElementById('valor_celsius').innerText = tempCelsius.toFixed(2) + ' °C';
    document.getElementById('valor_fahrenheit').innerText = tempFahrenheit.toFixed(2) + ' °F';
    document.getElementById('valor_kelvin').innerText = tempKelvin.toFixed(2) + ' K';
}
