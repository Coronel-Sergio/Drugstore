
const mostrarClientes = () => {

    axios.get("http://localhost:3001/Clientes/")
    .then(resp=>{
        console.log(resp.data)
        resp.data.map(
         (cliente) => 
            (document.getElementById("clientes").innerHTML += `
        <tr>
          <th scope="row">${cliente.id}</th>
          <td>${cliente.NombreCliente}</td>
          <td>${cliente.FormaPago}</td>
        </tr>        
        `)

       );
    }).catch(error=>console.log(error))
};

mostrarClientes();