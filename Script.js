class producto {
  constructor (id,nombre,precio,stock){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
  restaStock(){
    this.stock = this.stock -1;
    console.log(`El Stock de ${this.nombre} ha sido actualizado`)
    }
  }
  
  const producto0 = new producto(0,"lavandina",200,800);
  const producto1 = new producto(1,"jabon",80,200);
  const producto2 = new producto(2,"alcohol",100,500);
  const producto3 = new producto(3,"detergente",150,500);
  const producto4 = new producto(4,"desodorante_para_pisos",150,300);

  const productos = [producto0,producto1,producto2,producto3,producto4]

  
  const carrito = []


  let productosOfrecidos = "tenemos para ofrecerle: "
     
  
  function agregarCarrito(){

    for (item of productos){
      
      productosOfrecidos += ` \n ${item.id} - ${item.nombre} a tan solo $${item.precio}`
    }
    productosOfrecidos += ` \n Ingrse el numero del producto que desea. Para finalizar ingrese 99`

    let respuesta = parseInt(prompt(productosOfrecidos))

    while (isNaN(respuesta)){
      alert("Por favor ingrese un numero")
      respuesta = parseInt(prompt(productosOfrecidos))
    }
    
    while (respuesta != 99){

      switch(respuesta){
        case 0:
            carrito.push(productos[0])
            alert(`Agregamos al carrito el producto ${productos[0].nombre}`)
            productos[0].restaStock()
            break;
        
        case 1:
            carrito.push(productos[1])
            alert(`Agregamos al carrito el producto ${productos[1].nombre}`)
            productos[1].restaStock()
            break;
        
        case 2:
            carrito.push(productos[2])
            alert(`Agregamos al carrito el producto ${productos[2].nombre}`)
            productos[2].restaStock()
            break;
        
        case 3:
            carrito.push(productos[3])
            alert(`Agregamos al carrito el producto ${productos[3].nombre}`)
            productos[3].restaStock()
            break;
        
        case 4:
            carrito.push(productos[4])
            alert(`Agregamos al carrito el producto ${productos[4].nombre}`)
            productos[4].restaStock()
            break; 
          
        default:
            alert(`No tenemos el producto seleccionado`)  
            break;
      }
      respuesta = parseInt(prompt(productosOfrecidos))
    }
    alert("Cerramos tu pedido")
    mostrarCarrito()
  }

    let productosCarrito = `vas a llevar: `
    let precioCarrito = 0

  agregarCarrito()


  function mostrarCarrito(){
    for (itemsElegidos of carrito){
      productosCarrito += ` \n - ${itemsElegidos.nombre}`
      precioCarrito += itemsElegidos.precio
    }

    alert(`Productos elegidos: \n ${productosCarrito} \n por un total de ${precioCarrito}`)

  }
