var info;

async function conexion(){
    const url="http://localhost:4000/";
    fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          info = json;
        });
    }

function seleccion1(){
  var mono = document.getElementById("personaje");
  var test=document.getElementById("texto");
  
  var elegido=mono.value;
  test.innerHTML="Elegiste: "+ elegido;
  texto.appendChild("test");


}