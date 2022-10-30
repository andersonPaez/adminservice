const path = require("path")

function guardarImagen(req = request, res = response){

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ mensaje: "No se encontro el archivo" })
  }

  // Extrae el archivo segun el nombre (en este caso "archivo")
  const archivo = req.files.imagen
  const uploadPath = path.join(__dirname, "../imagenes/", archivo.name)

  // Usa el metodo mv() para colocar el archivo en cualquier parte del backend
  archivo.mv(uploadPath, (error) => {
    if (error) return res.status(500).send(error)

    res.send("Archivo cargado corectamente")
  })
}

// Codigo para carga de archivos:
// npm i express-fileupload
// Lo siguiente debe ir en el server:
// const fileUpload = require("express-fileupload");
// this.app.use(fileUpload({useTempFiles:true, tempFileDir: "/tmp/"}));