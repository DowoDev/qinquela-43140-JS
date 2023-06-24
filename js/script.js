
/*La idea de la función es que apenas uno entre a la parte de productos, nos de un mensaje de Bienvenida con las opciónes a realizar. Si quiere comprar un producto, en el prompt tiene que poner "SI" para que empiece a funcionar el código. Si la opción es "NO" se cierra la ventana y deja de funcionar.*/
function compra(){
  alert("Bienvenido a nuestra página de Productos. Podrás realizar tus compras aquí.");
  alert("Una vez que hayas terminado de elegir tus productos, ingresa la palabra SALIDA para darte el total de tu compra. Gracias por elegirnos!");//Aquí le explicamos que si desea finalizar la compra, con sólo escribir "SALIDA" es suficiente
  let next = prompt("¿Quieres realizar una compra?\n - SI para empezar a comprar nuestros productos \n - NO para cerrar este mensaje");
  if(next === "SI" || next==="si"){ //En este caso es por si la persona ingresa con o sin mayúsculas
    let producto = "";
    let lista_productos = "";
    let total_compra = 0;
    let actualizar = "Si quieres realizar una compra, actualiza la página. Gracias por visitarnos!";//Esta variable y la anterior son para dar mensajes. Este se usa cuando nos da la lista de productos y ponemos "SALIDA" sin elegir ninugno antes.
    let actualizar2 = "Si quieres volver a realizar una compra, actualiza la página. Gracias por visitarnos!";//Esta variable aparece cuando terminamos de realizar nuestra compra.
    while (producto!="SALIDA"){ //Mientras la palabra ingresada no sea "SALIDA" el código seguirá funcionando-
      producto = prompt("Ingrese un Código del 1-9 para su producto. SALIDA para finalizar.\n- 1: BLACK BLEND - € 18\n- 2: CHOCKO BLEND - € 21\n- 3: STRONG BLEND - € 23\n- 4: SWEET TETÉ - € 25\n- 5: BREEZE BLEND - € 27\n- 6: COOL BLEND - € 27\- 7: SUNNY BLEND - € 29\n- 8: SOFT BLEND - € 29\n- 9: NATURAL BLEND -  € 29"); //El listado lo ingreso porque me pasa que a veces tarda en cargar la página, y no muestra los precios. Entiendo que se hace con una propriedad, investigué pero preferí esperar a que nos lo den en clases.
      switch (producto){//Dependiendo del producto elegido, sumará ese producto al total.
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
          alert ("COMPRA FINALIZADA. AGUARDE UN MOMENTO.");//Mensanje que aparece cuando elegimos "SALIDA". Obviamente lo ideal sería que sea un mensaje con un temporizador, como que está calculando, en este caso con sólo dar aceptar, se va el mismo.
          break;
        default:
          alert ("El código ingresado no existe");//Por si el usuario ingresa un código inexistente.
      }
    }
    if (total_compra == 0){//En el caso de que ingresa para comprar pero no pone ningún código de producto y sólo pone "SALIDA", alertará con un mensaje de que no hay productos en el carrito y llama a la variable que da el mensaje que si queire realizar una compra, debe actualizar la página
      alert('No hay productos en su carrito');
      alert(actualizar);
    }else{
      alert("El total de la compra es: €"+total_compra+"\n"+actualizar2);//En este caso, da el total de la compra, mas otro mensaje que le avisa al usuario que si quiere volver a  realizar una compra nueva, solo debe actualizar la página.
    }
  } else {
    alert("Si quieres realizar una compra, actualiza la página. Gracias por visitarnos!");//En el caso de que pone "NO" a realizar una compra, le informamos de que puede realizar una compra actuaizando la página. No uso la variabel "actualizar" porque la misma está dentro del if anterior. Si la llamo no funciona. Podría haberla declarado fuera, preferí deja mas limpio el código.
  }
}
compra();//Con esto ejecuto la función


