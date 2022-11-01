class Banco {
    constructor(id, nombre, tasa12, tasa24, tasa36) {
      this.id = id
      this.nombre = nombre
      this.tasa12 = tasa12
      this.tasa24 = tasa24
      this.tasa36 = tasa36
    }
  }
  
  const banconacion = new Banco(1, 'banconacion', 10, 11, 12)
  const bancoprovincia = new Banco(2, 'bancoprovincia', 12, 14, 15)
  const santander = new Banco(3, 'santander', 8, 11, 14)
  
  let bancoSeleccionado = parseInt(
    prompt(
      'Ingresa el banco en el que quieres operar 1.banconacion - 2.bancoprovincia - 3.santander'
    )
  )
 
  let eligioBanco = false
  
  let infoBanco
  
  while (eligioBanco === false) {
    if (bancoSeleccionado === banconacion.id) {
      eligioBanco = true
      infoBanco = banconacion
    } else if (bancoSeleccionado === bancoprovincia.id) {
      eligioBanco = true
      infoBanco = bancoprovincia
    } else if (bancoSeleccionado === santander.id) {
      eligioBanco = true
      infoBanco = santander
    } else {
      alert('Dato incorrecto')
      bancoSeleccionado = parseInt(
        prompt(
        'Ingresa el banco en el que quieres operar 1.banconacion - 2.bancoprovincia - 3.santander'
        )
      )
    }
  }

  const montoPrestamo = parseInt(prompt('Ingresa el monto del prestamo'))
  

  const calculoCuotaMensual = (valor, interes, meses) => {
    const cuota = (valor + (valor * interes) / 100) / meses
    return cuota
  }
  
  const cuota12 = calculoCuotaMensual(
    montoPrestamo,
    infoBanco.tasa12,
    12
  )
  const cuota24 = calculoCuotaMensual(
    montoPrestamo,
    infoBanco.tasa24,
    24
  )
  const cuota36 = calculoCuotaMensual(
    montoPrestamo,
    infoBanco.tasa36,
    36
  )
   
  alert(
    `Las opciones del ${
      infoBanco.nombre
    } son: ${cuota12.toFixed(2)} pesos a 12 meses - ${cuota24.toFixed(
      2)} pesos a 24 meses - ${cuota36.toFixed(2)} pesos a 36 meses`
  )