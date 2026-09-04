function conversor(km) {
    console.log(`Convertendo ${km}Km em milha(s)...`)
    return km/1.609;
};
console.log(`O resultado é ${conversor(10).toFixed(2)} milha(s)`);