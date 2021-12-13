import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function CrearPelicula()
{
    const generos: generoDTO[] =[{id:1, nombre: 'Acción'}, {id:2, nombre: 'Drama'}, {id:3, nombre: 'Comedia'}]
    const cines: cineDTO[] =[{id:1, nombre: 'Agora'}, {id:2, nombre: 'Sambil'}]

    return(
        <>
            <h3>Crear peliculas</h3>
            <FormularioPeliculas
            actoresSeleccionados={[]}
            cinesNoSeleccionados={cines}
            cinesSeleccionados={[]}
            generosNoSeleccionados={generos}
            generosSeleccionados={[]}
            modelo={{titulo: '', enCines: false, trailer:''}}
            onSubmit={valores=> console.log(valores)}/>
        </>
    )
}