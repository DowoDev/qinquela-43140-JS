alert("Bienvenido a nuestra página de Productos. Podrás realizar tus compras aquí.");
alert("Una vez que hayas terminado de elegir tus productos, ingresa la palabra SALIDA para darte el total de tu compra. Gracias por elegirnos!");

function confirmacion(next){
    if(next == "SI"){
      return true;
    }else{
      return false;
    }
}
let next = "";
next = prompt("¿Quieres realizar una compra? SI/NO");
let seguir = confirmacion(next);

if (seguir){
  let producto = "";
  let lista_productos = "";
  let total_compra = 0;
  while (producto!="SALIDA"){ 
    producto = prompt("Ingrese el codigo del producto. Ej: 1. SALIDA para finalizar la compra.");
    switch (producto){
      default:
        alert ("El código ingresado no existe");
      case "1":
        total_compra += 18;
        break;
      case "2":
        total_compra += 21;
        break;
      case "3":
        total_compra += 23;
        break;
      case "4":
        total_compra += 25;
        break;
      case "5":
        total_compra += 27;
        break;
      case "6":
        total_compra += 27;
        break;
      case "7":
        total_compra += 29;
        break;
      case "8":
        total_compra += 29;
        break;
      case "9":
        total_compra += 29;
        break;
      case "SALIDA":
        alert ("COMPRA FINALIZADA. AGUARDE UN MOMENTO.");
    }
  }
  if (total_compra == 0){
    alert('No hay artículos en su carrito');
  }else{
    total = parseFloat(total_compra)
    alert("El total de la compra es: €"+total);
  }
}else{
  alert("Si quieres realizar una compra, actualiza la página. Gracias por visitarnos!")
}

/*        if(seguir2){
          alert ("COMPRA FINALIZADA. AGUARDE UN MOMENTO.");
        }else{
          break;
        }*/






// Hacer Do while







//     // chequeo el cosido y sumalizo
//     if (articulo == 1) {
//         lista_articulos += "Aceite - $1500" + "<br>";
//         total_compra += 1500;
//     } else if (articulo == 2) {
//         lista_articulos += "Vinagre - $700" + "<br>";
//         total_compra += 700;
//     } else if (articulo == 3) {
//         lista_articulos += "Kg Manzana - $1000" + "<br>";
//         total_compra += 1000;
//     } else if (articulo == 4) {
//         lista_articulos += "Kg Papa - $250" + "<br>";
//         total_compra += 250;
//     } else {
//         //ingreso un codigo erroneo
//         alert("articulo no encontrado");
//     }
//   }
  
// }




// if (isNaN(cant_articulos)) {

//     alert("No ingresarte un numero");


// } else if (cant_articulos <= 0) {


//     alert("Tenes qeu ingresr un numero > 0");

// } else {

//     let total_compra = 0;
//     let lista_articulos = "";


//     for (let i = 0; i < cant_articulos; i++) {
//       //se solicita al usuario el codigo del articulo
//       let articulo = parseInt(prompt("Ingrese el codigo del articulo"));
//       // chequeo el cosido y sumalizo
//       if (articulo == 1) {
//           lista_articulos += "Aceite - $1500" + "<br>";
//           total_compra += 1500;
//       } else if (articulo == 2) {
//           lista_articulos += "Vinagre - $700" + "<br>";
//           total_compra += 700;
//       } else if (articulo == 3) {
//           lista_articulos += "Kg Manzana - $1000" + "<br>";
//           total_compra += 1000;
//       } else if (articulo == 4) {
//           lista_articulos += "Kg Papa - $250" + "<br>";
//           total_compra += 250;
//       } else {
//           //ingreso un codigo erroneo
//           alert("articulo no encontrado");
//       }
//     }

//     //visualizo la data (se podria hacer alert o console.log)
//     document.write("Lista de articulos comprados : <br>" + lista_articulos + "<br>");
//     document.write("El total de la compra es: $" + total_compra);
// }