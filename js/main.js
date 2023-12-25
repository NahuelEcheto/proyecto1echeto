function calcularElPrecio(cuotas, precio) {
    if(cuotas === 6) {
       return precio * 1.40
    } else if(cuotas === 9) {
        return precio * 1.60
    } else if(cuotas === 12) {
        return precio * 2
    } else {
        console.warn("Elegir una cuota disponible.")
    }
}

function cuotasSinInteres() {
    console.log("Tenemos disponible las siguientes cuotas sin interes:")
    for(let i = 1; i <= 4; i++) {
        console.log(i + " cuotas sin interes")
    }
}

function mostrarPrecioFinal() {
    let precio = prompt("Ingrese el monto a pagar.")
    let cuotas = prompt("¿En cuantas cuotas va a pagar 6, 9 o 12?")

    if(precio !== "" && precio !== null && cuotas !== "" && cuotas !== null) {
        let precioFinal = calcularElPrecio(parseInt(cuotas), parseFloat(precio))
        console.log("El precio final es: " + precioFinal)
        cuotasSinInteres()
    } else {
        console.warn("Ingresar el precio o cuota válida")
    }


}
