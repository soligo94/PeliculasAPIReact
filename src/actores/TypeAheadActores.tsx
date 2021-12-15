import { actorPeliculaDTO } from "./actores.model";
import { Typeahead } from "react-bootstrap-typeahead";
import { ReactElement, useState } from "react";
import { Z_ASCII } from "zlib";

export default function TypeAheadActores(props: typeAheadActoresProps){

    const actores: actorPeliculaDTO[] = [
        {
            id: 1, nombre: 'Daniel', personaje: 'Arthas', foto:'https://i.blogs.es/3975a0/world-of-warcraft-rey-exanime/1366_2000.jpeg'
        },
        {
            id: 2, nombre: 'Que?', personaje: 'Arthas', foto:'https://i.blogs.es/3975a0/world-of-warcraft-rey-exanime/1366_2000.jpeg'
        },
        {
            id: 3, nombre: 'Hola', personaje: 'Arthas', foto:'https://i.blogs.es/3975a0/world-of-warcraft-rey-exanime/1366_2000.jpeg'
        }       
    ]
    const seleccion: actorPeliculaDTO[] = [];
    const [elementoArrastrado, setElementoArrastrado] = useState<actorPeliculaDTO | undefined>(undefined)
    
    function handleDragStart(actor: actorPeliculaDTO)
    {
        setElementoArrastrado(actor);
    }

    function handleDragOver(actor: actorPeliculaDTO)
    {
        if (!elementoArrastrado){
            return;
        }

        if(actor.id !== elementoArrastrado.id){
            const elementoArrastradoIndice = props.actores.findIndex(x => x.id === elementoArrastrado.id);
            const actorIndice = props.actores.findIndex(x => x.id === actor.id);
            const actores = [...props.actores];
            actores[actorIndice] = elementoArrastrado;
            actores[elementoArrastradoIndice] = actor;
            props.onAdd(actores);
        }
    }
    return(
        <>
            <label>Actores</label>
            <Typeahead id="typeahead" 
                onChange={actores =>
                {
                    if(props.actores.findIndex(x => x.id === actores[0].id) === -1)
                    {
                        props.onAdd([...props.actores, actores[0]]);
                    }
                    console.log(actores);
                }} 
                options={actores}
                labelKey={actor => actor.nombre}
                filterBy={['nombre']}
                placeholder="Escriba el nombre del actor..."
                minLength={2}
                flip={true}
                selected={seleccion}
                renderMenuItemChildren={actor =>
                (
                    <>
                        <img alt="imagen actor" 
                        src={actor.foto} 
                        style={{height:'64px', marginRight:'10px', width:'64px'}}/>
                        <span>{actor.nombre}</span>
                    </>
                )}
            />

            <ul className="list-group">
                {props.actores.map(actor => 
                <li draggable={true}
                onDragStart={() => handleDragStart(actor)}
                onDragOver={() => handleDragOver(actor)} 
                className="list-group-item list-group-item-action" key={actor.id}>
                    {props.listadoUI(actor)}
                    <span className="badge badge-primary badge-pill pointer" style={{marginLeft:'0.5rem'}} onClick={() => props.onRemove(actor)}>X</span>
                </li>)}
            </ul>
        </>
    )
}

interface typeAheadActoresProps
{
    actores: actorPeliculaDTO[];
    onAdd(actores: actorPeliculaDTO[]): void;
    listadoUI(actor: actorPeliculaDTO): ReactElement;
    onRemove(actor: actorPeliculaDTO): void;
}