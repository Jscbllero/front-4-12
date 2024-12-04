//variables globales
const d = document;
let tablePro = d.querySelector("#listado-pro > tbody");

console.log(tablePro)

//evento para detectar cuando se recarga la pagina
d.addEventListener("DOMContentLoaded", ()=>{
getDataTable();
});

//funcion para realizar la peticion a la api 
//y mostrar los datos en la tabla
let getDataTable = ()=>{
    let url = "http://localhost/backend-apiCrud/productos";
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            }
    }).then((d)=>d.json(d))
    .then((datos)=>{
        datos.forEach((pro, i)=>{
            let fila = d.createElement("tr");
            fila.innerHTML = `
            <td> </td>
            <td> ${pro.nombre} </td>
            <td> ${pro.descripcion} </td>
            <td> ${pro.precio} </td>
            <td> ${pro.stock} </td>
             <td> <img src="${pro.imagen}" width = "80px"> </td>
             <td>
                    <span class="btn btn-warning">✖️</span>
                    <span class="btn btn-warning">🖋️</span>

             </td>
            `;
            tablePro.appendChild(fila);
        })
    })
    .then((datos)=>console.log(datos))
    .catch((error)=> console.log(error))
}
