var niz = [252, 456, 21, 8, 88, 0, 18, 99, 22, 7, 132, 9164, 15, 667, 10100];

function ispisiNiz(){
    var div1 = document.getElementById("prviDiv");
    div1.innerText = "Pocetni niz je: ";
    for(var i = 0; i < niz.length; i++){
        div1.innerText += niz[i] + ', ';
    }
}
ispisiNiz();

function parniBrojevi(){
    var div2 = document.getElementById("drugiDiv");
    div2.innerText = "Parni brojevi su: "; //da mi pronadje div koji ima id drugiDiv, kako sam iznad postavila u varijabli i u njemu ispise parni brojevi su
    for(var i = 0; i < niz.length; i++){ //prolazi kroz niz
        var x = niz[i];
        if(x%2 === 0){ //ako je ostatak pri dijeljenju, clanova niza, sa dva 0, dalje-ispisi mi te clanove
           div2.innerHTML += '<b>' + x + '</b>, ';
        } 
          
}
}

parniBrojevi();

function sumaParnihBrojeva(){
    var div3 = document.getElementById("treciDiv");
    div3.innerText = "Suma parnih brojeva je: ";

    var sum =0;
    for(var i = 0; i < niz.length; i++){
        var x = niz[i];
        if(x%2 === 0){ //izdvoji mi parne brojeve, uslov kao u prethodnom zad.
           sum = sum + x; //zatim ih saberi
       
        }       
}
div3.innerText = "Suma parnih brojeva je: " + sum; //string + sabrana suma
}
sumaParnihBrojeva();



function sumaNeparnihBrojeva(){
    var div4 = document.getElementById("cetvrtiDiv");
    div4.innerText = "Suma neparnih brojeva je: ";

    var sum =0;
    for(var i = 0; i < niz.length; i++){
        var x = niz[i];
        if(x%2 != 0){ //izdvoji mi neparne tj one koji nisu djeljivi sa dva
           sum = sum + x; //saberi ih
        }
        
}
div4.innerText = "Suma neparnih brojeva je: " + sum;
}
sumaNeparnihBrojeva();




function sortiranje(){
    var div5 = document.getElementById("petiDiv");

    niz.sort(function(a, b){return b - a});
    div5.innerText = "Sortiran niz je: " + niz;

    
}
sortiranje();








