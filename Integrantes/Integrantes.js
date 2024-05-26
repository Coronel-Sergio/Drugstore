

const mostrarIntegrantes = () => {

      axios.get("http://localhost:3001/Integrantes/")
      .then(resp=>{
        console.log(resp.data);

         resp.data.map((integrante) => 
            (document.getElementById("integrantes").innerHTML += `
            <div class="card">
            <img src="${integrante.Imagen}" alt="">
            <div>
            <h5 class="card-title">${integrante.id}</h5>
            <p class="info">Legajo: ${integrante.Legajo}</p>
            <p class="info">Edad: ${integrante.Edad}</p>
            <p class="info">Comision: ${integrante.Comision}</p>    
  </div>
</div>
            `)
         )

      }).catch(err=> console.log(err))


}

mostrarIntegrantes()