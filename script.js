let _btnCarica = document.querySelector("button");
let _txtFile = document.querySelector("input[type=file]");

_btnCarica.addEventListener("click", leggiFile.bind(_txtFile, "TESTO"));

function leggiFile(testo) {
    alert(this.value);

    let reader = new FileReader();
    reader.onload = fineLettura;
    reader.readAsDataURL(this.files[0]);

    function fineLettura(e) {/* 
        let datiFile = e.target.result;
        let stringa = datiFile.split(",")[1];
        alert(atob(stringa)); */
        console.log(e);
    }
}

