export const obtenerNumeroDesdeUrl = (url: string): number | null => {
  // Utilizamos una expresión regular para extraer el número al final de la URL
  const match = url.match(/\/(\d+)\/?$/);

  if (match && match[1]) {
    return parseInt(match[1], 10);
  } else {
    return null;
  }
}

// Ejemplo de uso:
const url = 'https://pokeapi.co/api/v2/pokemon-species/1/';
const numero = obtenerNumeroDesdeUrl(url);

if (numero !== null) {
  console.log('Número extraído:', numero);
} else {
  console.error('No se pudo extraer un número válido desde la URL.');
}
