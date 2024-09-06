export function esPalabraCapicua(palabra) {
    let palabraLimpia = palabra.toLowerCase().replace(/\s+/g, '');
    let palabraInvertida = palabraLimpia.split('').reverse().join('');
    console.log(palabraInvertida);
    return palabraLimpia === palabraInvertida;
}
