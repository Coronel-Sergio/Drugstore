
let Id = 0;


document.getElementById("btnActualizar").style.display = "none";

const mostrarVentas = () => {
    axios.get("http://localhost:3001/Ventas/")
        .then(resp => {
            console.log(resp.data)
            resp.data.map(
                (venta) =>
                    (document.getElementById("ventas").innerHTML += `
                <tr>
                    <th scope="row">${venta.id}</th>
                    <td>${venta.NombreEmpleado}</td>
                    <td>${venta.NombreCliente}</td>
                    <td>${venta.Producto}</td>
                    <td><img src="${venta.Imagen}" alt="" style="width: 6rem;"></td>
                    <td>${venta.FechaVenta}</td>
                    <td>${venta.Cantidad}</td>
                    <td>${venta.Precio}</td>
                    <td>${venta.FormaPago}</td>
                    <td>
                        <button type="button" class="btn text-danger" onclick="eliminarVenta(${venta.id})"><i class="fa-solid fa-trash"></i></button> 
                        <button type="button" class="btn text-success" onclick="editarVenta(${venta.id},'${venta.NombreEmpleado}','${venta.NombreCliente}','${venta.Producto}','${venta.Imagen}','${venta.FechaVenta}',${venta.Cantidad},${venta.Precio},'${venta.FormaPago}')"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button type="button" class="btn text-info" onclick="verVenta(${venta.id},'${venta.NombreEmpleado}','${venta.NombreCliente}','${venta.Producto}','${venta.Imagen}','${venta.FechaVenta}',${venta.Cantidad},${venta.Precio},'${venta.FormaPago}')"><i class="fa-solid fa-eye"></i></button>
                    </td>
                </tr>        
            `)
            );
        }).catch(error => console.log(error))
};


mostrarVentas();


const agregarVenta = () => {

    let NombreEmpleado = document.getElementById("empleados").value
    let NombreCliente = document.getElementById("clientes").value
    let Producto = document.getElementById("productos").value
    let Imagen = document.getElementById("imagen").value
    let FechaVenta = document.getElementById("fechaventa").value
    let Cantidad = document.getElementById("cantidad").value
    let Precio = document.getElementById("precio").value
    let FormaPago = document.getElementById("formapago").value
    if (NombreEmpleado === "" || NombreCliente === "" || Producto === "" || Imagen === "" || FechaVenta === "" || Cantidad === "" || Precio === "" || FormaPago === "") {
        alert("rellena los campos")
    } else {
        axios.post("http://localhost:3001/Ventas/", {

            NombreEmpleado,
            NombreCliente,
            Producto,
            Imagen,
            FechaVenta,
            Cantidad,
            Precio,
            FormaPago
        }).then(resp => {
            console.log(resp);
            alert("Venta agregada correctamente")
            mostrarVentas();
        }).catch(error => console.log(error));
    }

}

document.getElementById("btnAgregar").addEventListener("click", agregarVenta)


const eliminarVenta = (id) => {
    Id = id;
    console.log("el id es este: " + id)
    axios.delete("http://localhost:3001/Ventas/" + id).then(resp => {
        console.log(resp);
        mostrarVentas()
        alert("Venta eliminada correctamente")
    }).catch(error => console.log(error));
}


const editarVenta = (id, nombreEmpleado, nombreCliente, producto, imagen, fechaventa, cantidad, precio, formapago) => {

    Id = id;
    document.getElementById("empleados").value = nombreEmpleado;
    document.getElementById("clientes").value = nombreCliente;
    document.getElementById("productos").value = producto;
    document.getElementById("imagen").value = imagen;
    document.getElementById("fechaventa").value = fechaventa;
    document.getElementById("cantidad").value = cantidad;
    document.getElementById("precio").value = precio;
    document.getElementById("formapago").value = formapago;

    document.getElementById("btnAgregar").style.display = "none";
    document.getElementById("btnActualizar").style.display = "inline-block";


}


const actualizarVenta = () => {

    let NombreEmpleado = document.getElementById("empleados").value
    let NombreCliente = document.getElementById("clientes").value
    let Producto = document.getElementById("productos").value
    let Imagen = document.getElementById("imagen").value
    let FechaVenta = document.getElementById("fechaventa").value
    let Cantidad = document.getElementById("cantidad").value
    let Precio = document.getElementById("precio").value
    let FormaPago = document.getElementById("formapago").value

    if (NombreEmpleado === "" || NombreCliente === "" || Producto === "" || Imagen === "" || FechaVenta === "" || Cantidad === "" || Precio === "" || FormaPago === "") {
        alert("rellena los campos")
    } else {
        axios.put("http://localhost:3001/Ventas/" + Id, {
            NombreEmpleado,
            NombreCliente,
            Producto,
            Imagen,
            FechaVenta,
            Cantidad,
            Precio,
            FormaPago
        }).then(resp => {
            console.log(resp);
            mostrarVentas()
            alert("venta actualizada correctamente")
        })
    }

}

document.getElementById("btnActualizar").addEventListener("click", actualizarVenta)



const verVenta = (id, nombreEmpleado, nombreCliente, producto, imagen, fechaventa, cantidad, precio, formapago) => {

    document.getElementById("venta").innerHTML = `
        <div class="card" style="width: 21rem;">
            <img class="card-img-top" src="${imagen}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">#${id}</h5>
                <h3>Nombre del Empleado: ${nombreEmpleado}</h3>
                <h3>Nombre del Cliente: ${nombreCliente}</h3>
                <p class="card-text">Producto: ${producto}</p>
                <p class="card-text">Fecha de la Venta: ${fechaventa}</p>
                <p class="card-text">Cantidad: ${cantidad}</p>
                <p class="card-text">Precio: ${precio}</p>
                <p class="card-text">La Forma de pago: ${formapago}</p>
            </div>
        </div>
   `
}


const ListarEmpleados = () => {
    axios.get("http://localhost:3001/Empleados")
    .then((resp)=>{
        resp.data.map(
            (empleado)=>(document.getElementById("empleados").innerHTML += `
            <option value="${empleado.NombreEmpleado}">${empleado.NombreEmpleado}</option>
                      
            `))
    })
}

ListarEmpleados()



const ListarClientes = () => {
    axios.get("http://localhost:3001/Clientes")
    .then((resp)=>{
        resp.data.map(
            (cliente)=>(document.getElementById("clientes").innerHTML += `
            <option value="${cliente.NombreCliente}">${cliente.NombreCliente}</option>
                      
            `))
    })
}

ListarClientes()


const ListarProductos = () => {
    axios.get("http://localhost:3001/Productos/")
    .then((resp)=>{
        resp.data.map(
            (producto)=>(document.getElementById("productos").innerHTML += `
            <option value="${producto.Producto}">${producto.Producto}</option>
                      
            `))
    })
}

ListarProductos()



