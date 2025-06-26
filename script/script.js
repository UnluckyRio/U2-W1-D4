// Script per ruotare le parole con animazione, rispettando i ritardi

// Seleziono tutte le parole da ruotare
const parole = document.querySelectorAll(".parole i");
let indice = 0; // Indice della parola attiva

function ruotaParole() {
  // Rimuovo classi da tutte le parole
  parole.forEach((parola, idx) => {
    parola.classList.remove("attiva", "entrata", "uscita");
    // Resetto l'animazione per permettere il ri-trigger
    parola.style.animation = "none";
    // Forzo il reflow per riapplicare l'animazione
    void parola.offsetWidth;
    parola.style.animation = "";
  });

  // Parola attuale in uscita
  const parolaUscita = parole[indice];
  parolaUscita.classList.add("uscita");

  // Calcolo il prossimo indice
  indice = (indice + 1) % parole.length;

  // Parola successiva in entrata
  const parolaEntrata = parole[indice];
  parolaEntrata.classList.add("attiva", "entrata");
}

// Inizializzo mostrando solo la prima parola
parole.forEach((parola, idx) => {
  if (idx === 0) {
    parola.classList.add("attiva");
  } else {
    parola.classList.remove("attiva", "entrata", "uscita");
  }
});

// Avvio la rotazione ogni 2 secondi
setInterval(ruotaParole, 2000);
