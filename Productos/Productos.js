
const mostrarProductos = () => {

    axios.get(" http://localhost:3001/Productos/")
    .then(resp=>{
        console.log(resp.data)
        resp.data.map(
         (producto) => 
            (document.getElementById("productos").innerHTML += `
        <tr>
          <th scope="row">${producto.id}</th>
          <td>${producto.Producto}</td>
          <td><img src="${producto.Imagen}" alt="" style="width: 4rem;"></td>
          <td>${producto.Stock}</td>
          <td>${producto.Precio}</td>
        </tr>        
        `)

       );
    }).catch(error=>console.log(error))
};

mostrarProductos();