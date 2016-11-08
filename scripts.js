// version 1.0

window.onload = start;

function start()
{
    odliczanie();
}


//SKRYPT NA PODSTAWIE ODINKA 1 KURSU JAVASCRIPT MIROSŁAWA ZELENTA Z PASJA INFORMTYKI
function odliczanie()
{
    var dzisiaj = new Date();        
    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth()+1;
    var rok = dzisiaj.getFullYear();
        
    var godzina = dzisiaj.getHours();
    if(godzina<10) godzina = "0"+godzina;
    var minuta = dzisiaj.getMinutes();
    if(minuta<10) minuta = "0"+minuta;
    var sekunda = dzisiaj.getSeconds();
    if(sekunda<10) sekunda = "0"+sekunda;
            
    document.getElementById("timer").innerHTML = dzien+"/"+miesiac+"/"+rok+" | "+godzina+":"+minuta;
            
    setTimeout("odliczanie()",1000);
}