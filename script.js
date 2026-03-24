// INPUT DATI UTENTE

// Chiedo all'utente i chilometri da percorrere
const km = parseFloat(prompt("Inserisci il numero di chilometri da percorrere"));

// Chiedo l'età del passeggero
const eta = parseInt(prompt("Inserisci l'età del passeggero"));

// Prezzo per ogni chilometro
const prezzoAlKm = 0.21;

// Calcolo del prezzo iniziale (senza sconti)
let prezzoBiglietto = km * prezzoAlKm;

// applico uno sconto del 20%
if (eta < 18) {
    prezzoBiglietto = prezzoBiglietto * 0.8;
} 
// applico uno sconto del 40%
else if (eta > 65) {
    prezzoBiglietto = prezzoBiglietto * 0.6;
}
// Se non rientra in nessuna categoria di sconto
else {
    console.log("Nessuno sconto")
}

// Stampo il prezzo finale
console.log(`Il prezzo finale del biglietto è €${prezzoBiglietto.toFixed(2)}`);