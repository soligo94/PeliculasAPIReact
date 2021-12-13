import { actorPeliculaDTO } from "../actores/actores.model";
import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPelicula()
{
    const generosNoSeleccionados: generoDTO[] =[{id:2, nombre: 'Drama'}]
    const generosSeleccionados: generoDTO[] =[{id:1, nombre: 'Acción'}, {id:3, nombre: 'Comedia'}]
    const cinesSeleccionados: cineDTO[] =[{id:2, nombre: 'Sambil'}]
    const cinesNoSeleccionados: cineDTO[] =[{id:1, nombre: 'Agora'}]
    const actoresSeleccionados: actorPeliculaDTO[] = [
        {
            id: 1, nombre: 'Daniel', personaje: 'Arthas', foto:'https://i.blogs.es/3975a0/world-of-warcraft-rey-exanime/1366_2000.jpeg'
        }
    ]
    return(
        <>
            <h3>Editar peliculas</h3>
            <FormularioPeliculas 
            actoresSeleccionados={actoresSeleccionados}
            cinesNoSeleccionados={cinesNoSeleccionados}
            cinesSeleccionados={cinesSeleccionados}
            generosNoSeleccionados={generosNoSeleccionados}
            generosSeleccionados={generosSeleccionados} 
            modelo={{titulo: 'Peli test', enCines: true, trailer:'url', fechaLanzamiento: new Date('2019-01-01T00:00:00')}}
            onSubmit={valores=> console.log(valores)}/>
        </>
    )
}