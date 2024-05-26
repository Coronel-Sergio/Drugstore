
const mostrarEmpleados = () => {

    axios.get("http://localhost:3001/Empleados/")
    .then(resp=>{
        console.log(resp.data)
        resp.data.map(
         (empleado) => 
            (document.getElementById("empleados").innerHTML += `
        <tr>
          <th scope="row">${empleado.id}</th>
          <td>${empleado.NombreEmpleado}</td>
          <td>${empleado.Turno}</td>
        </tr>        
        `)

       );
    }).catch(error=>console.log(error))
};

mostrarEmpleados();