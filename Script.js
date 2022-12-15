class producto {
  constructor (id,nombre,precio,stock){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
  
  }
  
  const producto0 = new producto(0,"lavandina",200);
  const producto1 = new producto(1,"jabon",80);
  const producto2 = new producto(2,"alcohol",100);
  const producto3 = new producto(3,"detergente",150);
  const producto4 = new producto(4,"desodorante_para_pisos",150);

  const productos = [producto0,producto1,producto2,producto3,producto4]


  const divProductos = document.getElementById('divProductos')
  productos.forEach(producto=>{
    divProductos.innerHTML += `
    <div id="${producto.id}" class="card cardProp">
    <div class="card-body">                                                                                                                
    <h4 class="card-title">${producto.nombre}</h4>
    <p class="card-text">${producto.precio}</p>
    <button id=${producto.id} class="btn btn-primary">Agregar</button>
    </div>
    </div>
    
    `
  })
  const carrito = JSON.parse(localStorage.getItem('carrito')) || []
  const btnAgre = document.querySelectorAll('.btn-primary')
  btnAgre.forEach(boton=>{
    boton.onclick = () => {
    const productoSeleccionado = productos.find(prod=>prod.id===parseInt(boton.id)) 
    
    const prodcarrito = {...productoSeleccionado,cantidad:1}

    const indexCarrito = carrito.findIndex(prod=>prod.id === prodcarrito.id)
    if(indexCarrito === -1){
      carrito.push(prodcarrito)
    } else{
      carrito[indexCarrito].cantidad ++
    }
    localStorage.setItem('carrito',JSON.stringify(carrito))
    }
    })

    const botonFinalizar = document.querySelector ('#Finalizar')
    botonFinalizar.onclick = () => {
      const valores = carrito.map(prod=>prod.precio * prod.cantidad)
      let totalCompra = 0
      valores.forEach(valor=>{
        totalCompra += valor
      })
      console.log(carrito)
      
      Swal.fire({
        icon: 'success',
        title: `${totalCompra}$`,
        text: 'Es su total en el ¡Carrito!',
      })

      const botonFinalizar = document.querySelector ('#Total')
    botonFinalizar.onclick = () =>{
    let promesa = new Promise((resolve,reject) =>{
      if(totalCompra >= 10000){
        resolve('')
      }else{
        reject('')
      }
    })
    promesa
    .then(res =>{
      Swal.fire('Su compra tiene un valor elevado'+res)
    })
    .catch(error =>{
      Swal.fire('Su compra tiene un valor por debajo de 10000$'+error)
    })
     }

    }

    