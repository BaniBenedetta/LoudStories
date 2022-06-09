
function onLoad() {

var oggetto_json_risposte=JSON.parse(localStorage.getItem('risposte_utente'))

//prendo l'oggetto memorizzato nel local storage

//prendo un oggetto che ha un id chiamato "div_ancora" sotto al quale attaccherò questa preferenza_partenza
//di codice Html scritta in "elemento da incollare". L'elemento da incollare verrà incollato attraverso
//la funzione innerHTML

var elemento_ancora=document.getElementById('div_ancora');

elemnto_da_incollare=
  '<div class="wrapper fadeInDown">'
  + '<div id="formContent">'
      +'<div id="paragrafo_ancora" class="fadeIn first">'
        + '<img src="sorriso.png" class="visa" alt="non hai scaricato immagine">'
        +'<p> Felice='+oggetto_json_risposte.felice+'<p>'
        +'<p> Triste='+oggetto_json_risposte.triste+'<p>'
      +"</div>"
    +"</div>"
  +"</div>"


  elemento_ancora.innerHTML+=elemnto_da_incollare

  elemnto_da_incollare2=
    '<div class="wrapper fadeInDown">'
    + '<div id="formContent">'
        +'<div id="paragrafo_ancora" class="fadeIn first">'
          + '<img src="sorriso.png" class="visa" alt="non hai scaricato immagine">'
          +'<p> Felice='+oggetto_json_risposte.alto+'<p>'
          +'<p> Triste='+oggetto_json_risposte.basso+'<p>'
        +"</div>"
      +"</div>"
    +"</div>"


    elemento_ancora.innerHTML+=elemnto_da_incollare2

    elemnto_da_incollare3=
      '<div class="wrapper fadeInDown">'
      + '<div id="formContent">'
          +'<div id="paragrafo_ancora" class="fadeIn first">'
            + '<img src="sorriso.png" class="visa" alt="non hai scaricato immagine">'
            +'<p> Felice='+oggetto_json_risposte.magro+'<p>'
            +'<p> Triste='+oggetto_json_risposte.ciccione+'<p>'
          +"</div>"
        +"</div>"
      +"</div>"


      elemento_ancora.innerHTML+=elemnto_da_incollare3


}
