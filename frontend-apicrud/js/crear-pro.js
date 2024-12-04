//variables globales
const d = document;

let nameInput = d.querySelector("#productos-select");
let priceInput = d.querySelector("#precio-pro");
let stockInput = d.querySelector("#stock-pro");
let descripctionInput = d.querySelector("#description-pro");
let imagenInput = d.querySelector("#imagen-pro");
let btnCreate = d.querySelector("#btn-create");

//evento al boton
btnCreate.addEventListener("click", () => {

    let producto = getDataProduct();
    console.log(producto);
    sendDataProduct(producto)
});

//funcion para validar los datos del formulario y obtener la info del producto

let getDataProduct = ()=>{
    //validar datos
    console.log(nameInput.value);  
    console.log(priceInput.value)
    console.log( descripctionInput.value);
    console.log(stockInput.value);
    console.log(imagenInput.src);
    if(nameInput.value && priceInput.value && descripctionInput.value && stockInput.value && imagenInput.src){
        product ={
            nombre: nameInput.value,
            precio: priceInput.value,
            stock: stockInput.value,
            descripcion: descripctionInput.value,
            imagen: imagenInput.src
            }
            /* nameInput.value = ""
            descripctionInput.value = ""
            priceInput.value = ""
            stockInput.value = 10
            imagenInput.src = "https://m.media-amazon.com/images/I/61XV8PihCwL._SY250_.jpg" */
            console.log(product)
            
        }else{
            alert("todos los datos son obligatorios")
        }
        return product
    }


    //funcion para enviar los datos del formulario a la base de datos

    let sendDataProduct = async (pro)=>{
        let url = "http://localhost/backend-apiCrud/productos"
        try {
           let respuesta = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(pro)
            })
            //conocer la respuesta del servidor
            console.log(respuesta)
            if (respuesta.status == 406) {
                alert(" Error, Los datos no fueron enviados")
            }else{
                 let mensaje = await respuesta.json()
            console.log(mensaje)
            alert(mensaje.message)
            location.href = "../listado-pro.html"
            }
           
        } catch (error) {
            console.log(error)
        }
    }