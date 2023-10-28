var info;
var personajeElegido;
var armaElegida;



async function conexion(){
    const url="http://localhost:4000/";
    fetch(url, {
        method: "GET",
      })
        .then(response => response.json())
        .then(json => {
        info=json;

        });
   
       
    }

function seleccion1(){

  var selector1 = document.getElementById("personajes");
   for(i=0; i<info.length; i++){
      var elemento1=document.createElement("option");
      var nombre1=document.createTextNode(info[i].clase);
      elemento1.text= info[i].clase;
      elemento1.value= i;
      selector1.appendChild(elemento1);
    }
    };

    

function seleccion2(){
  personajeElegido=personajes.selectedIndex;
  var selector2 = document.getElementById("armas");
   for(i=0; i<info[personajeElegido].Armas.length; i++){
      var elemento2=document.createElement("option");
      var nombre2=document.createTextNode(info[personajeElegido].Armas[i]);
      elemento2.text= info[personajeElegido].Armas[i];
      elemento2.value= i;
      selector2.appendChild(elemento2);
      
  
}
};

function limpiarLista1(){

  var limpiar1 = document.getElementById("personajes");
   for(i=0; i<info.length; i++){
      personajes.pop;
    }
}

function show(){
armaElegida=armas.selectedIndex;
var mensaje1=document.getElementById("mensaje");
var letras0=document.createElement("h1");
var letras1="Elegiste al: "+info[personajeElegido].clase;
letras0.innerHTML=letras1;
mensaje1.appendChild(letras0);

var mensaje=document.getElementById("mensaje");
var letras2=document.createElement("h1");
var salto=document.createElement("br");
var letras3="Elegiste el arma: "+ info[personajeElegido].Armas[armaElegida];
letras2.innerHTML=letras3;
mensaje.appendChild(letras2);

var mensaje=document.getElementById("mensaje");
var letras4=document.createElement("h1");


var letras6=document.createElement("h1");
var salto=document.createElement("br");
var fuerza=" Fuerza: "+ info[personajeElegido].atributos.fuerza;
letras6.innerHTML=fuerza;
mensaje.appendChild(letras6);

var destreza=" Destreza: "+ info[personajeElegido].atributos.destreza;
letras4.innerHTML=destreza;
mensaje.appendChild(letras4);
// +" Suerte: " + info[personajeElegido].atributos.suerte;

var letras7=document.createElement("h1");
var salto=document.createElement("br");
var inteligenia=" Inteligenia: "+ info[personajeElegido].atributos.inteligenia;
letras7.innerHTML=inteligenia;
mensaje.appendChild(letras7);

var letras8=document.createElement("h1");
var salto=document.createElement("br");
var carisma=" Carisma: "+ info[personajeElegido].atributos.carisma;
letras8.innerHTML=carisma;
mensaje.appendChild(letras8);

var letras9=document.createElement("h1");
var salto=document.createElement("br");
var suerte=" Suerte: "+ info[personajeElegido].atributos.suerte;
letras9.innerHTML=suerte;
mensaje.appendChild(letras9);
}