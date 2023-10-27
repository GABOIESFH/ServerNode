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