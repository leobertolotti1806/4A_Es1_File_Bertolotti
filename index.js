var _btnCarica, _txtFile;

window.onload= function(){
    //Contesto: window -> perché function() è richiamata da window
    console.log(this);


    _btnCarica = document.querySelector("button");
    _txtFile = document.querySelector("input[type=file]");

    //leggiFile() è richiamata in modo SINCRONO
    //_btnCarica.addEventListener("click", leggiFile());

    //leggiFile è richiamata in modo ASINCRONO dal bottone
    //.bind(contesto, eventuali parametri presenti nella funzione)
    _btnCarica.addEventListener("click", leggiFile.bind(_txtFile, "TEST"));
};

function leggiFile(testo){
    //SENZA BIND -> this è uguale al bottone 
    console.log(this);
    console.log(testo);

    console.log(this.value);

    //Istanzio la classe FileReader
    let reader = new FileReader();
    reader.onload = fineLettura;
    //
    reader.readAsDataURL(this.files[0]);
    alert("Lettura avviata");
}

function fineLettura(e){
    console.log(e);
    alert("file letto veramente");
    
    //let datiFile = e.target.result;
    //let stringa = datiFile.split(",")[1];
    //alert(atob(stringa));
}