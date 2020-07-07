// banda
// descripcion
// integrantes
// discografia
// las canciones mas populares
// web oficial
// mi cancion favorita

// modelado de entidades

class miArtistaFavorito {
    nombrebanda = ""
    web = ""
    descripcion = ""
    integrantes = []
    discografia = []
    miCancionFavorita = ""
}

class integrantes {
    nombre = ""
    funcionDentroDelaBanda = ""
}

class discografia {
    nombre = ""
    anio = 0
    canciones = []

}
class cancion {
    nombre = ""
    duracion = "56:23"
    idTemaSpotify = ""
}