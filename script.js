// INPUT DATI UTENTE

// Chiedo all'utente i chilometri da percorrere
const km = parseFloat(prompt("Inserisci il numero di chilometri da percorrere"));

// Chiedo l'età del passeggero
const eta = parseInt(prompt("Inserisci l'età del passeggero"));

// Prezzo per ogni chilometro
const prezzoAlKm = 0.21;

// Calcolo del prezzo iniziale (senza sconti)
let prezzoBiglietto = km * prezzoAlKm;
