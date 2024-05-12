// Función para calcular la sensación térmica
function calculateWindChill(temperature, windSpeed, unit) {
    let windChill;

    // Convertir la temperatura a Celsius si se proporciona en Fahrenheit
    if (unit === 'F') {
        temperature = (temperature - 32) * (5 / 9);
    }

    // Calcular el factor de sensación térmica
    windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));

    return windChill;
}

// Obtener la temperatura y la velocidad del viento (solo como ejemplo, debes obtener estos valores de tu API o de alguna otra fuente)
const temperature = 10; // Ejemplo de temperatura en Celsius
const windSpeed = 20; // Ejemplo de velocidad del viento en km/h

// Calcular la sensación térmica
const windChill = calculateWindChill(temperature, windSpeed, 'C');

// Actualizar los valores en el HTML
document.getElementById('temperature').textContent = temperature + ' °C';
document.getElementById('wind-speed').textContent = windSpeed + ' km/h';
document.getElementById('wind-chill').textContent = windChill.toFixed(2) + ' °C';