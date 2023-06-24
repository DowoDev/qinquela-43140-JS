alert("Bienvenido. Por favor ingresa el café que quieras y la cantidad para que lo sumemos a tu carrito. Una vez terminado, ingresa la palabra SALIDA para darte el total. Gracias por elegirnos!")
let articulo = "";
let lista_articulos = "";
let total_compra = 0;
while (articulo!="SALIDA"){ 
    articulo = prompt("Ingrese el codigo del articulo");
    switch (articulo){
      case "1":
        lista_articulos += "Aceite - $1500" + "<br>";
        total_compra += 1500;
        break;
      case "2":
        lista_articulos += "Papa - $700" + "<br>";
        total_compra += 700;
        break;
      case "3":
        lista_articulos += "Cebolla - $500" + "<br>";
        total_compra += 500;
        break;
      case "4":
        lista_articulos += "Fernet - $5800" + "<br>";
        total_compra += 800;
        break;
      default:
        alert ("El código ingresado no existe");
    }
  }
  alert("El total de la compra es:"+total_compra);
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