
/*
JSON è un formato di serializzazione basato su testo per lo scambio di dati, principalmente tra server e applicazione web.
JSON è l'acronimo di JavaScript Object Notation, e utilizza l'estensione di file .json.

JSON è un concorrente di XML, ma possiede una sintassi più semplice e compatta rispetto al rivale.

Il formato JSON è basato su due tipi di strutture di dati: serie di coppie nome/valore - {"name1":"value1", "name2":"value2"}
- e liste ordinate di valori, chiamate array - ["valore1", "valore2"]. Questi dati vengono letti da un parser JSON
che li converte nel tipo di dati appropriato per il linguaggio di programmazione usato nel recupero dei dati.
*/

/*
Il local storage è una zona di memorizzazione che tutte le pagine web hanno. È una memorizzazione che dura fintanto
che il tab all'interno del quale è aperto il sito rimane aperto. Per controllare il local storage e ciò che c'è memorizzato
premi 'CTRL + SHIFT + I'. In alto troverai una barra con con delle voci: "Elements, Console, Sources"...cerca Application e cliccala.
Una volta entrata in Application ci sarà una colonna sulla sinistra con la scritta "Local Storage", cliccaci!

Ti dovresti trovare una tabella con due colonne: "KEY" e "VALUE". Sotto KEY ci sarà il nome del "contenitore dell'oggetto JSON
e sotto Value ci sarà l'oggetto json contenuto.
*/

function memorizza_risposta(valore, prossima_pagina){

  //la funzione localStorage.getItem(VALORE KEY) mi restituisce l'oggetto JSON (il VALUE) corrispondente a quella KEY

  if (localStorage.getItem('risposte_utente')==null) {

    //Creo un oggetto Json con tutti i valori settati a false per memorizzare le risposte dell'utente

    let preferenza_partenza = {
        felice: false,
        triste: false,
        alto: false,
        basso: false,
        magro: false,
        ciccione: false

    }

    localStorage.setItem('risposte_utente', JSON.stringify(preferenza_partenza));

    //inserisco i valori nel local storage

  }

  //richiamo la funzione passandogli i valori che sono stati passati a memorizza_risposta
  controlla_valore(valore, prossima_pagina)


}

function controlla_valore(valore, prossima_pagina) {

  var oggetto_json_risposte=JSON.parse(localStorage.getItem('risposte_utente'))

  //verrà prelevato il valore dell'oggetto dal local storage

  //controllerò quale sia il valore interno alla variabile valore

  //setterò il valore corretto


  switch (valore) {
    case "triste":
    oggetto_json_risposte.triste=true;
    oggetto_json_risposte.felice=false;
    break;

    case "felice":
    oggetto_json_risposte.triste=false;
    oggetto_json_risposte.felice=true;
    break;

    case "ciccione":
    oggetto_json_risposte.magro=false;
    oggetto_json_risposte.ciccione=true;
    break;

    case "magro":
    oggetto_json_risposte.magro=true;
    oggetto_json_risposte.ciccione=false;
    break;

    case "alto":
    oggetto_json_risposte.alto=true;
    oggetto_json_risposte.basso=false;
    break;

    case "basso":
    oggetto_json_risposte.alto=false;
    oggetto_json_risposte.basso=true;
    break;


    default: alert("c'è un errore")

  }

  //e rimetterò l'oggetto modificato nel local storage

  localStorage.setItem('risposte_utente', JSON.stringify(oggetto_json_risposte) );

  //aprirò la pagina seguente del questionario

  window.open(prossima_pagina, "_self");

}
