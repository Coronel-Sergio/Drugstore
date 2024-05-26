
const btnIngresar = () => {

      let usuario = document.getElementById("usuario").value 
      let password = document.getElementById("password").value

      let bandera = false;
      
      axios.get("http://localhost:3001/Usuarios").then(resp=>{

        console.log(resp.data);
        resp.data.forEach((user) => {
           
            if (usuario===user.Usuario && password===user.Password) {
                bandera = true
            }
        });
       
        if (bandera===true) {
            window.location.href = "../Drugstore/Drugstore.html"
            alert("Bienvenido")
        }else
        { 
           alert("El usuario o el password son incorrectos, por favor ingreselos de nuevo")
           Limpiar()
        }

      }).catch(err=>console.log(err))

}


const Limpiar = () => {
    document.getElementById("usuario").value = ""
    document.getElementById("password").value = ""
}

document.getElementById("btnIngresar").addEventListener("click",btnIngresar)

