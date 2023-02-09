// 1. Recuperare elemento Pulsante Play da DOM
const playBtnEl = document.querySelector('button');

// 2. Recupero elemento Griglia da DOM in cui poi inserisco le celle create
const grigliaEl = document.querySelector('.griglia');

// 3. Aggancio evento "click" al Pulsante Play recuperato da DOM
playBtnEl.addEventListener('click', function(){

  // Svuoto contenuto della Griglia perche ad ogni "click" del pulsante si deve generare una nuova griglia e non appenderla alla precedente
  grigliaEl.innerHTML = '';
  
  // 4. Imposto Dimensione delle Celle e Numero complessivo di Celle [Gliglia Quadrata 10x10]  
  latoGriglia = 10;
  numCelle = latoGriglia * latoGriglia;

  // 5. Creo Ciclo di 'numCelle' interazione ed a ogni interazione creo una Cella da inserire dentro 'GrigliaEl'
  for (let i=0; i < numCelle; i++){

    // 5.1 - Creo Stringa che rappresenta la Cella
    const cellaStringa = `<div style="width:calc(100% / ${latoGriglia})">${i+1}</div>`;
    
    // 5.2 - Inserisco la Cella creata dentro la Griglia nel DOM
    grigliaEl.innerHTML += cellaStringa;

  }

  // 6 - Prendo dal DOM tutte le Celle della Griglia
  const listaCelle = document.querySelectorAll('.griglia > div');
  console.log(listaCelle);

  // 6. Creo Ciclo per aggangiare a ogni cella evento "click"
  for (let i=0; i < numCelle; i++){

    // 6.1 - Al "click" sulla cella appare un messaggio nella console con il numero della cella
    listaCelle[i].addEventListener('click', function(){
      console.log(`Questa e' la cella numnero ${i+1}`);
    });

  }

});